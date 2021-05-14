import React from "react";


class PictureShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchPicture(1)   // need to change what I pust in 
    }

    render(){
        const {picture} = this.props
        if(!picture) return null;
        // const pictureArray = Array.isArray(picture.pictureUrl) ? picture.pictureUrl : [picture.pictureUrl]

        // const image = pictureArray.map((url, idx) => {
        //     <img key={idx} src={url} />
        // })
        console.log(`I am in the picture page`)
        console.log(this.props)
        return (
            <div>
            <img src={`${picture.pictureUrl}`} alt="" /> 
            </div>
        )
    }

}

export default PictureShow