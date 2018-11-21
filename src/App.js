import React, { Component } from "react";
import "./App.css";
import MyComponent from "./MyComponent";

class App extends Component {
  state = {
    counter: 1,
    hasError: false
  };

  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true
    });
  };

  /**
   *   컴포넌트가 처음 브라우저에 나타나게 될때 가장 먼저 실행되는 함수.
   *   - 컴포넌트가 가지고 있어야 하는 state 등 미리해야하는 작업들을 설정.
   */
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  /**
   *    컴포넌트가 브라우저에 나타난 이후 시점에 뭔가를 하겠다.
   *    - 라이브러리 (차트)
   *    - GraphQL
   *    - Ajax 요청
   *    - 컴포넌트가 나타난 다음 DOM 에서 스크롤 이벤트를 읽고싶다.
   *    - 등등...
   */
  componentDidMount() {
    //   ajax, GraphQL 등의 작업 수행...
    console.log("componentDidMount");
    console.log(this.myDiv.getBoundingClientRect());
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    if (this.state.hasError) {
      return <div>Error 가 발생했어요...</div>;
    } else {
      return (
        <div ref={ref => (this.myDiv = ref)}>
          {/* 
            Prpps 는 부모 컴포넌트가 자식 컴포넌트에게 값을 전달할 때 사용 
            <Child value="value"/>    
        */}
          {/* 멀티 라인 주석 작성법 */}
          {/* this.state.counter 가 10 이 넘게되면 MyComponent 가 사라지고, 사라질때 componentWillUnmount 호출 */}
          {this.state.counter < 10 && (
            <MyComponent value={this.state.counter} />
          )}
          <button onClick={this.handleClick}>Click me!</button>
        </div>
      );
    }
  }
}

export default App;
