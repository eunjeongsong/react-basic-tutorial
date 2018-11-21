import React, { Component } from "react";

class MyComponent extends Component {
  state = {
    value: 0
  };

  /**
   *    getDerivedStateFromProps
   *    - Props 로 받은 값을 state 에 그대로 동기화 시키고 싶을 때 사용.
   * @param {*} nextProps 다음으로 받아올 props 값을 가져옴.
   * @param {*} prevState 현재 update 되기 전의 상태를 가져옴.
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.value !== nextProps.value) {
      return {
        value: nextProps.value
      };
    }
    return null;
  }

  /**
   *    shouldComponentUpdate (성능 최적화)
   *    - 특정 조건에 따라 렌더링을 막아줄 수 있는 함수.
   *    - Virtual DOM 에 그릴지 말지를 결정.
   * @param {*} nextProps
   * @param {*} nextState
   */
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value === 10) return false;
    return true;
  }

  /**
   *    componentDidUpdate
   *    - 작업을 마치고 컴포넌트가 업데이트 됐을 때 사용하는 함수
   * @param {*} prevProps
   * @param {*} nextState
   */
  componentDidUpdate(prevProps, nextState) {
    if (this.props.value !== prevProps.value) {
      console.log("value 값이 바뀌었다!", this.props.value);
    }
  }

  /**
   *    componentWillUnmount
   *    - 컴포넌트가 사라지면서 호출되는 함수
   */
  componentWillUnmount() {
    console.log("사라진다.");
  }

  render() {
    return (
      <div>
        {this.props.missing.something}
        <p>props: {this.props.value}</p>
        <p>state: {this.state.value}</p>
      </div>
    );
  }
}

export default MyComponent;
