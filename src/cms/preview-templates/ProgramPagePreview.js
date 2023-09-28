import React from 'react'
import PropTypes from 'prop-types'
import { ProgramPageTemplate } from '../../templates/program-page'
import { divide } from 'lodash'

const ProgramPagePreview = ({ entry, getAsset }) => {
//   const tags = entry.getIn(['data', 'tags'])
  // return (
  //   <div>

  //  image: { entry.getIn(['data', 'featuredimage'])}
    
  //   <ProgramPageTemplate
      
  //     image={this.props.getAsset(entry.getIn(['data', 'featuredimage']))}
  //     title={entry.getIn(['data', 'title'])}
  //     />
  //     {/* content={widgetFor('body')} */}
  //     </div>
  // )
  console.log('getAsset')
  console.log(getAsset(entry.getIn(['data', 'featuredimage'])))

  return (
    <div>
      
    
    <ProgramPageTemplate
      image={getAsset(entry.getIn(['data', 'featuredimage']))}
      title={entry.getIn(['data', 'title'])}
      />
      </div>
  )
}

ProgramPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ProgramPagePreview
