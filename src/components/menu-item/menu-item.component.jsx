import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom';
//region withRouter explained
/*
withRouter --> higher order component
           --> takes function as an argument
           -->returns a modified component
 */
//endregion


const MenuItem = ({title, imageUrl, size, history, match, linkUrl}) => {
    //history being acessible due to props.

    return (
        <div className={`${size} menu-item`}
             onClick={() => history.push(`${match.url}${linkUrl}`)}
            //region explaining -->    onClick={() => history.push(`${match.url}${linkUrl}`)}
            /*

               --> history.push --> comes from the props.
               --> matchUrl --> will show where the current page is.
               --> then from there go to linkUrl --> which will redirect to page.
                         --> if its homepage --> goes to --> /hats.
             */
            //endregion
        >

            <div className='background-image'
                 style={{backgroundImage: `url('${imageUrl}')`}}/>


            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW </span>
            </div>
        </div>
    );
};

export default withRouter(MenuItem); // this powers up the MenuItem component.
