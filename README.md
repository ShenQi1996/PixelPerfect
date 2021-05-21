# PixelPerfect 

PiexlPerfect is a functional clone of 500px has most of the functions of the orgin site. Is a network for artis to display their art work and their love with the fantasy world.
 This is a single page application build using React/Redux, Javascript, Ruby on Rails, and PostgreSQL and allow users to sign up and login to an account to view arts, user can also upload arts and like other peoples art.
 
 # Demo
 
[PiexlPerfect](https://pixelperfectsam.herokuapp.com/#/)


# Technologies


## Frontend

* Reactjs, JavaScript, Redux, CSS,HTML, Webpack
  *  Create all the user interface
  
![asdasdas](https://user-images.githubusercontent.com/68937006/119148024-1938c900-ba1a-11eb-833b-287cea9d1857.PNG)

## Backend

* PostgreSQL and Ruby on Rails
  *  Seed?Access files for art and users in database 
  
 ![11212asd](https://user-images.githubusercontent.com/68937006/119148189-44bbb380-ba1a-11eb-9677-0b80a5fb4941.PNG)

  
## Deployment

* AWS, Heroku
  *  Deploy the site
  *  Use AWS to store arts and will be accessed by the page

![122](https://user-images.githubusercontent.com/68937006/119148538-92382080-ba1a-11eb-9340-09b944779356.PNG)


# Features

*  Users able to create accounts to upload and like pictures

 ![11212asd](https://user-images.githubusercontent.com/68937006/119150003-0aebac80-ba1c-11eb-901f-be18fc98d0be.PNG)
 
 ```                 <div className="LS_form_container">
                    <div className="errors">{this.handleError()}</div>
                    <form className="LS_form">
                        <h2>Sign Up</h2>
                        {/* <div classNam="look"><p>or</p></div> */}
                        <label>Email 
                            <input className="LS_Input" type="text" value={this.state.email} onChange={this.handleInput("email")} />
                        </label>
                            {this.state.eError ? <p className="errors">Please enter a valid email address</p> : null}
                        <label>Username
                            <input className="LS_Input" type="text" value={this.state.username} onChange={this.handleInput("username")} />
                        </label>
                        <label>Password
                            <input className="LS_Input" type="password" value={this.state.password} placeholder="(minimum 8 characters)" onChange={this.handleInput("password")} />
                        </label>
                            {this.state.pError ? <p className="errors">Your password must be at least 8 characters long</p> : null}
                        <button className="LS_button" onClick={this.demoSubmit}>Demo Sign Up</button>
                        <button className="LS_button" onClick={this.handleSubmit}>Sign Up</button>
                        <div class="bottom_test"><p>Aleady have an account? <Link className="link_with_no_underLine" style={{ color: '#1167cf'}} to="/login">Log in</Link> </p></div>
                    </form>
                </div>
```
*  All user arts are accessible through the discover page

![122](https://user-images.githubusercontent.com/68937006/119150098-1f2fa980-ba1c-11eb-9ce9-c6de23ddda38.PNG)

```
            <div className="upload_container">
                <h3>Discover</h3>
                <div className="discover_container">
                    <ul className="picture_item_container">
                        {pictures.map((picture, idx) =>( 
                            <PictureItem  key={idx} picture={picture} loggedIn={loggedIn} like={like} session={session} createLike={createLike} deleteLike={deleteLike} />
                        ))}
                    </ul>
                </div>
            </div>

```

*  User can not like their own art

![zxczxczxc](https://user-images.githubusercontent.com/68937006/119150131-2787e480-ba1c-11eb-8695-1c26c1660cbb.PNG)

```
        const isUser = () => {
            if(props.session.id == props.picture.ownerId){
                return null
            }else{
                return toggleLike()
            }
        }

```
*  User have thier own profile page with all of their arts

![asdasdasdcvcx](https://user-images.githubusercontent.com/68937006/119150153-2c4c9880-ba1c-11eb-8fe3-f7aa8641828b.PNG)

```
            <div className="upload_container">
                <Link to="/homefeed">
                    <i className="fas fa-arrow-left profile_arrow"></i>
                </Link>
                <div className="profile_header" >
                <i className="fas fa-user-circle profile_logo_2"></i>
                    <h1>{session.username}</h1>
                </div>
                <div className="discover_container">
                    <ul className="picture_item_container">
                        {userPic.map((pic, idx) => (
                            <PictureItem key={idx} picture={pic} />
                            ))}            
                    </ul>
                </div>
            </div>

```

# Future Updates
  
  * User will be able to delete and change infro on the thier art
  * User will be able to upload their own icon
  * User will be able to follow other users


  

  



