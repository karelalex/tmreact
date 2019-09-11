import React from 'react';
import '../css/LoginForm.css'

class LoginForm extends React.Component {
    render() {
        return <div className='loginForm'>
                <h1>Вход в систему</h1>
            <button className='closeButton' onClick={this.props.closeHandler}>Х</button>
                <form>
                    <div className="prop-cover">
                        <div className="prop-name"><p>Логин</p></div>
                        <div className="prop-desc">
                            <input type="text" name="login" value={this.props.login} placeholder="Логин" onChange={this.props.loginChangeHandler}/></div>
                    </div>
                    <div className="prop-cover">
                        <div className="prop-name"><p>Пароль</p></div>
                        <div className="prop-desc"><input type="password" value={this.props.password} name="pass" placeholder="Пароль" onChange={this.props.passChangeHandler}/>
                        </div>
                    </div>
                    <div className="but-cover margin_10">
                        <button onClick={this.props.loginHandler}>Отправить</button>
                    </div>
                </form>
            </div>
    }
}

export default LoginForm;