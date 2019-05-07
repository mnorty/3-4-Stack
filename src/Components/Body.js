import React,{Component} from 'react';

export default class Body extends Component{

    render(){
      return(
        <div className={'motherContainer'}>
          <header className={'header'}>  
            <div className={'logo'}>
              <img src="volkswagen_logo.jpg}" alt=""/> {/* need to fix logo */}
            </div>
            <div className={'logoCenter'}>
              <h1 className={'logoText'}>Beetle finder</h1>
              <p className={'logoText'}>identifing a classic beetle with just a glance</p>
            </div>
            <button>click me</button>
          </header>
          <div className={'base'}>
            <div className={'heroBox'}>
              <div className={'heroTop'}>
                <div className={'textBody'}>
                  <h1>hey!</h1>
                </div>
              </div>
              <div className={'heroBottom'}>
                <button>push me</button>
              </div>
            </div>
          </div>
       
                    
        </div>
      )
    }
}