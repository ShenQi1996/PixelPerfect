import React from 'react';
import { Redirect } from 'react-router-dom';

class UploadPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.picture.id,
            title: this.props.picture.title,
            description: this.props.picture.description,
            ownerId: this.props.picture.ownerId,  
            pictureFile: null,
            pictureUrl: null,
            tError: false,
            redirect: false
        }
        this.handleFile = this.handleFile.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCancel=this.handleCancel.bind(this)
    }

    Update(field){
        // debugger
        return e =>  this.setState({[field]: e.target.value})
    }

    handleFile(e){
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({pictureFile: file, pictureUrl: fileReader.result});
        }
        if(file){
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e){

        // console.log(this.state)
        if(this.titleError() == false){
            const formData = new FormData();
            formData.append("picture[title]", this.state.title)
            formData.append("picture[description]", this.state.description)
            formData.append("picture[ownerId]", this.state.ownerId)
            formData.append("picture[photo]", this.state.pictureFile)
            this.props.createPicture(formData).then(this.setState({redirect: true}));
        }
    }

    handleCancel(e){
        this.setState({pictureFile: null})
    }

    titleError(){
        if(this.state.title.length !== 0){
            return false;
        }
        this.setState({tError: true});
    }


    render(){
        // console.log("I am in the form")
        // console.log(this.state)
        if(this.state.redirect){
            return <Redirect to="/homefeed"/> 
        }
        const preview = this.state.pictureUrl ? <img className="upload_form_preview_img" src={this.state.pictureUrl} /> : null

        if(!this.state.pictureFile){
            return(
                <div className="upload_container">
                    <h3>Upload</h3>
                    <div className="upload_form_container">
                        <i className="fas fa-arrow-up"></i>
                        <h2>Upload your art</h2>
                        <input type="file" onChange={this.handleFile} id="selectedFile" style={{display: "none"}}/>
                        <label className="upload_lable" for="selectedFile">
                            Select Art
                        </label>
                    </div>
                </div>
            )
        }

        if(this.state.pictureFile){
            return(
                <div className="upload_container">
                    <h3>Upload</h3>
                    <div className="upload_container_from_two">
                        <div className="upload_form_preview">
                            {preview}
                        </div>
                        <form className="upload_form">
                            <h4>art selected</h4>
                            <label>Title:
                                <input className="upload_input" type="text" value={this.state.title} onChange={this.Update("title")}/>
                                {this.state.tError ? <p className="errors">Title can not be empty</p> : null}
                            </label>
                            <label>Description:
                                <textarea cols="40" rows="6" className="upload_textarea" type="text" value={this.state.description} onChange={this.Update("description")}/>
                            </label>
                            <div>
                                <button className="upload_button_cancel" onClick={this.handleCancel}>Cancel</button>
                                <input className="upload_button_upload" onClick={this.handleSubmit} type="submit" value="Upload" />
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
    }
}

export default UploadPage