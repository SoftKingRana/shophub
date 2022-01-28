import React, {
  useState,
  useEffect,
  useRef,
  Children,
  cloneElement,
  createRef,
} from "react";
import PropTypes from "prop-types";
import styles from "./Carousel.module.scss";
import ArrowNavigator from "./ArrowNav";
import styled from "styled-components";
import { collapseCards, expandCards } from "./collapseHelper";
import scrollTo from "./scrollHelper";

const Carousel = ({
  children,
  stepSize,
  cardDist,
  navOnTop,
  navTitle,
  collapse,
  splitIndex,
}) => {
  const viewport = useRef(null);
  const cardRefs = useRef([...Array(children.length)].map(() => createRef()));
  const [atLeftEdge, setAtLeftEdge] = useState(true);
  const [atRightEdge, setAtRightEdge] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    setCardWidth(cardRefs.current[0].current.clientWidth);
  }, [children]);

  // const cardWidth = () => cardRefs.current[0].current.clientWidth;

  const checkIfAtEdge = () => {
    const scrollLength = viewport.current.scrollLeft;
    const viewportLength = viewport.current.clientWidth;
    const totalLength = viewport.current.scrollWidth;
    setAtRightEdge(scrollLength + viewportLength === totalLength);
    setAtLeftEdge(scrollLength === 0);
  };

  const getScrollParams = (steps) => {
    const durationUnit = 300;
    return {
      scrollWidth: steps * cardWidth,
      scrollTime: Math.min(steps * durationUnit, 600),
    };
  };
  const handleScroll = (isForward) => {
    const { scrollWidth, scrollTime } = getScrollParams(stepSize);
    const newPosition =
      viewport.current.scrollLeft + (isForward ? scrollWidth : -scrollWidth);
    return scrollTo({
      element: viewport.current,
      to: newPosition,
      duration: scrollTime,
      scrollDirection: "scrollLeft",
      callback: checkIfAtEdge,
      context: this,
    });
  };
  const moveToSplitIndex = () => {
    const scrollTime = 600;
    const newPosition = Math.max(splitIndex - 1, 0) * cardWidth;
    return scrollTo({
      element: viewport.current,
      to: newPosition,
      duration: scrollTime,
      scrollDirection: "scrollLeft",
      callback: checkIfAtEdge,
      context: this,
    });
  };

  const handleGoForward = (e) => {
    e.preventDefault();
    handleScroll(true);
  };
  const handleGoBack = (e) => {
    e.preventDefault();
    handleScroll(false);
  };
  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const handleCollapse = () => {
    moveToSplitIndex();
    collapseCards();
  };
  const handleExpand = () => {};

  useEffect(() => {
    if (collapse) handleCollapse();
    else handleExpand();
  }, [collapse]);

  const CardCollapseContainer = styled.div`
    opacity: 1;
    left: ${(props) => props.cardWidth * props.index}px;
    &.collapse {
      animation: ${({ cardWidth, gap, index }) =>
          collapseCards(cardWidth, gap, index)}
        0.5s 0.7s forwards;
    }
    &.expand {
      animation: ${({ cardWidth, gap, index }) =>
          expandCards(cardWidth, gap, index)}
        0.5s forwards;
    }
  `;

  const wrapCard = (baseCard, index) => {
    return (
      <div
        className={styles.cardx}
        ref={cardRefs.current[index]}
        style={
          index === children.length - 1
            ? null
            : { paddingRight: `${cardDist}px`, zIndex: children.length - index }
        }
      >
        {index < splitIndex ? (
          baseCard
        ) : (
          <CardCollapseContainer
            cardWidth={cardWidth}
            gap={10}
            index={index - splitIndex}
            className={collapse ? "collapse" : "expand"}
          >
            {baseCard}
          </CardCollapseContainer>
        )}
      </div>
    );
  };

  useEffect(() => {
    checkIfAtEdge();
    window.addEventListener("resize", checkIfAtEdge);
  });

  const ArrowNavPair = () => (
    <div className={styles.arrowsx}>
      <ArrowNavigator
        handleClick={handleGoBack}
        backward
        className={`${styles.arrowx} ${styles.leftx} ${
          atLeftEdge && styles.hidex
        }`}
      />
      <ArrowNavigator
        handleClick={handleGoForward}
        className={`${styles.arrowx} ${styles.rightx} ${
          atRightEdge && styles.hidex
        }`}
      />
    </div>
  );

  return (
    <div className={`${styles.containerx} ${navOnTop && styles.extendToEdgex}`}>
      <div className={styles.titlebarx}>
        {navOnTop && <ArrowNavPair />}
        {navTitle()}
      </div>

      <div className={styles.sliderx}>
        {!navOnTop && <ArrowNavPair />}
        <div className={styles.cardContainerx}>
          <div
            className={styles.scrollablex}
            ref={viewport}
            onScroll={checkIfAtEdge}
          >
            {Children.map(children, (child) =>
              cloneElement(child, {
                expanded,
                setExpanded: toggleExpansion,
              })
            ).map(wrapCard)}
          </div>
        </div>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  stepSize: PropTypes.number,
  cardDist: PropTypes.number,
  navOnTop: PropTypes.bool,
  navTitle: PropTypes.func,
};

Carousel.defaultProps = {
  children: [],
  stepSize: 1,
  cardDist: 13,
  navOnTop: false,
  navTitle: () => {},
};

export default Carousel;
