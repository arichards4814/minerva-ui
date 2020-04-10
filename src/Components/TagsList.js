import React from 'react'
import TagPill from '../Components/TagPill'


const TagsList = props => {

    const renderPills = () => {
        if (props.tags){
            return props.tags.map(tag => <TagPill {...tag} color="fourth" theme="minerva"/> )
        }
    }
    return(
        <div>   
            {renderPills()}
        </div>
    )
}

export default TagsList