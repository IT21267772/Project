import React, { useContext, useEffect, useState } from 'react';
import UserLayout from '../Layouts/UserLayout';
import { userRequest } from '../../requestMethods';
import './myProfile.scss'
import account from '../../assets/account.png'
import { toast } from 'react-hot-toast';
import { UserContext } from '../../contexts/UserContext';
import uploadImage from '../../uploadImage';

function MyProfile() {

  const {user, setUser} = useContext(UserContext)

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [file, setFile] = useState('')

  useEffect(() => {
    userRequest.get('/users/profile')
    .then(res => {
      console.log(res.data)
      setUsername(res.data.username)
      setEmail(res.data.email)
      setPhone(res.data.phone)
      setAddress(res.data.address)
      setImageURL(res.data.image)
    })
    .catch(err => {
      toast.error(err.message)
    })

  }, [])

  const deletePicture = () => {
    // setFile('')
    setImageURL('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(file) {
      const URL = await uploadImage(file)
      userRequest.put('/users/profile', {username, email, phone, address, image: URL})
      .then(res => {
        if(res.status === 200) {
          setFile('')
          toast.success('Profile updated')
          setUser(res.data)
          setImageURL(res.data.image)
        }
      })
      .catch(err => {
        toast.error(err.message)
      })
    }
    else {
      userRequest.put('/users/profile', {username, email, phone, address, image: imageURL})
      .then(res => {
        if(res.status === 200) {
          toast.success('Profile updated')
          setUser(res.data)
        }
      })
      .catch(err => {
        toast.error(err.message)
      })
    }
  }

  const handleCancel = () => {
    setFile('')
  }

  return (
    <UserLayout>

      <div className='myProfileContainer'>

        <form className='profileForm' onSubmit={handleSubmit}>
          
          <div className='profile-top'>

            <img src={file ? URL.createObjectURL(file) : (imageURL ? imageURL : account)} className='profile-picture' />

            <div className='profile-pic-buttons'>
              <label for="img" className='profile-pic-button profile-button-main'>Upload New</label>
              <input id='img' type="file" accept='.png, .jpeg, .jpg, .webp' onChange={(e) => setFile(e.target.files[0])} hidden/>

              {
                imageURL && <span className='profile-pic-button profile-button-secondary' onClick={deletePicture}>Delete Picture</span>
              }
              
            </div>

          </div>

          <div className='profile-bottom'>


            <label className='profile-label'>Username</label>
            <input type='text' className='profile-input' value={username} onChange={(e) => setUsername(e.target.value)} />

            <label className='profile-label'>Email</label>
            <input type='text' className='profile-input profile-input-readonly' value={email} readOnly />

            <label className='profile-label'>Phone</label>
            <input type='tel' className='profile-input' value={phone} onChange={(e) => setPhone(e.target.value)} />

            <label className='profile-label's>Address</label>
            <textarea className='profile-textarea' rows='5' value={address} onChange={(e) => setAddress(e.target.value)}/>

          </div>

          <div className='profile-buttons'>

            <button type='submit' className='profile-update'>Update</button>
            <button type='reset' className='profile-cancel' onClick={handleCancel}>Cancel</button>

          </div>

        </form>


      </div>
    </UserLayout>
  );
}

export default MyProfile;
