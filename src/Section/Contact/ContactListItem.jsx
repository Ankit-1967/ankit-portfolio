import React from 'react'

function ContactListItem({Link, Icon, Title, Description}) {
  return (
    <>
      <div className='contact-list-item'>
            <div className="contactlist-icon-wrapper">
                <a href={Link}>
                    <span className='contactlist-icon'>
                        {Icon && <Icon/>}
                    </span>
                </a>
            </div>
            <div className="contactlist-details">
                <h3 className="contact_title">{Title}</h3>
                <a href={Link} className="contact-description-wrapper">
                    <p className="contact-description">{Description}</p>
                </a>
            </div>
      </div>
    </>
  )
}

export default ContactListItem
