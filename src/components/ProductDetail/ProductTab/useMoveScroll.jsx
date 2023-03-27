function useMoveScroll(element) {
  const onMoveToElement = () => {
    element.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return onMoveToElement;
}

export default useMoveScroll;