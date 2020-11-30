import React, { Component } from 'react';
class HistorySample extends Component {
    handleGoBack = () => {
        this.props.history.goBack();  // goBaCK 
    }
    handleGoHome = () => {
        this.props.history.replace('/');
    }
    componentDidMount(){
        // 화면밖을 나가려고 할때 질문
        this.unblock = this.props.history.block('Would you wanna leave?')
    }
    componentWillUnmount(){
        // 언마운트 되면 질문 종료
        if(this.unblock) {
            this.unblock();
        }
    }
    render(){
        console.log("history", this.props.history)
        return(
            <div>
                <button onClick={this.handleGoBack}>뒤로</button>
                <button onClick={this.handleGoHome}>홈으로</button>
            </div>
        )
    }
}
export default HistorySample;