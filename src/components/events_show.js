import React, { Component } from 'react';

// for redux
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

// actions
import { getEvent, deleteEvent, putEvent } from '../actions';

class EventsShow extends Component {
  constructor(props) {
    super(props)
    // bindしておく。決まり文句
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }
    
    renderField(field) {
        // meta属性はredux-form 特有のもの(touchedはフォームに一度触ったらという意味)
        const { input, label, type, meta: { touched, error } } = field

      return (
        <div>
          <input { ...input } placeholder={ label } type={ type } />
{/* touched あり、かつエラーありの場合、エラー表示*/}
          { touched && error && <span>{ error }</span> }
        </div> )
    }

  async onDeleteClick() {
    // params.idを取得
    const { id } = this.props.match.params

    //action で定義されたメソッド呼び出し
    await this.props.deleteEvent(id)
    this.props.history.push("/")

      }
          
  async onSubmit(values){
//        await this.props.postEvent(values)
        // toppageですでに取得した情報をpush?
        this.props.history.push("/")
      }
          
    render() {
        // pristine 何も入力されていない状態でTrueを返すオブジェクト
        // submitting submitされたらTrueが返されるオブジェクト
        // handleSubmitはボタン押下時に渡ってくる関数？
      const { handleSubmit, pristine, submitting } = this.props
      
      return (
        <form onSubmit={ handleSubmit(this.onSubmit) }>
          <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
          <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>
          
          <div>
            <input type="submit" value="Submit" disabled={ pristine || submitting } />
            <Link to="/">Cancel</Link>
            <Link to="/" onClick={this.onDeleteClick} >Delete</Link>
          </div>
        </form>
      )
     }
}

// reducerで定義したeventsを設定
//const mapStateToProps = state => ({ events: state.events })

// importしたincre,decreの関数をdispatchする
// ↓↓↓このようにも書ける↓↓↓
/*
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})
*/

const validate = values => {
  const errors = {}

  // titleが未入力の場合はメッセージ表示させるvalidate
  if(!values.title)errors.title = "Please enter the title!"
  if(!values.body)errors.body = "Please enter the body!!"

  return errors
  }

const mapDispatchToProps = ({ deleteEvent })

// connect
export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventShowForm' })(EventsShow)
)