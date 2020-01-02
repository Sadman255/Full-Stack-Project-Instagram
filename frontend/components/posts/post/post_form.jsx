import React from 'react';
import NavBarContainer from '../../nav_bar/nav_bar_container';
import {withRouter} from 'react-router-dom';

class PostForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            body: this.props.body,
            photo: this.props.photo,
            user_id: this.props.user_id,
            photoFile: null,
            photoUrl: null,
            foundFile:true
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleFile(e){
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        debugger
        reader.onloadend = () => 
               this.setState({ photoUrl: reader.result, photoFile: file});

        if (file) {
            debugger
            reader.readAsDataURL(file);
        }
        else{
            debugger
            this.setState({photoURL: "", photoFile: null});
        }
    }

    handleSubmit(e) {
        debugger;
        e.preventDefault();
        debugger
       
        
        if(this.state.photoFile){
            const formData = new FormData();
            formData.append('post[body]',this.state.body)
            formData.append('post[user_id]',this.state.user_id)
            formData.append('post[photo]',this.state.photoFile)

            this.props.createPost(formData)
                .then(() => {
                    this.props.history.push(`/`)
                })
        }
        else{
            this.setState({foundFile: false})
        }
        
    }

    update(field){
        return (e) => {
            this.setState({[field]: e.target.value})
        }
    }

    errors(){
        if (! this.state.foundFile){
            return (
                <li className="no-file">
                    No file found
                </li>
            )
        }
    }

    handleCancel(e) {
        debugger
        e.preventDefault();
        let path = `/users/${this.props.currentUser.id}`;
        this.props.history.push(path)
    }

    render(){

        let postPreview; 

        if (this.state.photoUrl) {
            postPreview = 
                <div className="preview-div">
                    <img 
                       className="post-pic-preview"
                        src = {this.state.photoUrl}
                       />
                </div>
        } else {
            postPreview = 
               <div className="preview-div">
                   <div className="preview-outline">
                       <i className="fa fa-camera"></i>
                   </div>
               </div>
        }
        return (
              <div> 
                   <NavBarContainer /> 
            <div className="post-form-container"> 
                <ul className="login-errors">
                    {this.errors()}
                </ul>

                <form className="post-form" onSubmit={this.handleSubmit}>
                    <div className="upload-form-div">
                        {postPreview}
                    </div>
                    <div className="post-form-right">
                        <div className="post-right-top">
                            <div className="post-form-author">
                                {this.props.currentUser.username}
                            </div>
                        </div>

                        <div className="post-right-mid">
                            <label className='upload-photo' htmlFor="file-selector">
                                <div>
                                    <input className="photo-input-field" id="file-selector" type="file" onChange={this.handleFile} />
                                </div>
                            </label>
                            <label className='upload-body'>
                                <textarea className="post-form-body" type="text" value={this.state.body} placeholder="Write a caption" onChange={this.update('body')}/>
                            </label>
                        </div>
                        <div className="post-right-bottom">
                            <div className="post-from-buttons">
                                <button className="post-button-cancel" onClick={this.handleCancel}>Cancel</button>
                                <button className="post-button-upload" type="submit">Upload Post</button>
                            </div>
                        </div>
                    </div>
                </form>
                </div>
             </div>
        )
    }
        

}
export default withRouter(PostForm);