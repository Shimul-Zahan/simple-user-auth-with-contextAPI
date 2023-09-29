import React, { useContext } from 'react'
import { MyContext } from '../../Context/AuthProvider';
import auth from '../Firebase/firebase.config';

const UserDetails = () => {

    // const { setProfile } = useContext(MyContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo_URL = e.target.photo_URL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const user = auth.currentUser;
        if (user !== null) {
            const displayName = name;
            // const email = user.email;
            // const photoURL = user.photoURL;
        }
    }



  return (
      <div className="hero min-h-[700px]">
          <div className="hero-content">

              <div className="card w-[600px] shadow-2xl bg-[#171717] text-white">
                  <div className="card-body w-[600px]">

                      <form onSubmit={handleRegister} className="space-y-6">
                          <div className="form-control">
                              <label className="label">
                                  <span className="label-text text-white">User Name</span>
                              </label>
                              <input type="text" placeholder="email" name="name" required className="input text-black text-lg input-bordered" />
                          </div>
                          <div className="form-control">
                              <label className="label">
                                  <span className="label-text text-white">Image URL</span>
                              </label>
                              <input type="text" placeholder="email" name="photo_URL" required className="input text-black text-lg input-bordered" />
                          </div>
                          <div className="form-control">
                              <label className="label">
                                  <span className="label-text text-white">Email</span>
                              </label>
                              <input type="email" placeholder="email" name="email" required className="input text-black text-lg input-bordered" />
                          </div>
                          <div className="form-control">
                              <label className="label">
                                  <span className="label-text text-white">Password</span>
                              </label>
                              <input type="password" name="password" required placeholder="password" className="input input-bordered text-black text-lg" />
                              <label className="label">
                                  <a href="#" className="label-text-alt text-white link link-hover">Forgot password?</a>
                              </label>
                          </div>
                          <div className="form-control mt-6">
                              <input type="submit" value="Registration" className="btn text-white btn-primary" />
                          </div>
                      </form>

                  </div>
              </div>

          </div>
      </div>
  )
}

export default UserDetails