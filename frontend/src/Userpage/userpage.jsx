import "./userpage.css"

export const Userpage = () => {
  return (
    <div className="container">
      <div className="personalinformation">
        <h2 className="personalinformation-title">Personal Information</h2>
        <p className="personalinformation-details">
          Update your personal details and profile picture
        </p>

        <div className="profile-picture">
          <div className="profile-picture-placeholder">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="profile-picture-icon"
            >
              <path d="M12 2a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5zm0 12c4 0 8 2 8 6v2H4v-2c0-4 4-6 8-6z" />
            </svg>
            <div className="profile-picture-upload-icon">⬆</div>
          </div>
          <div className="profile-picture-details">
            <p>JPG, GIF or PNG. Max size of 2MB.</p>
            <button className="profile-picture-change-button">
              Change Picture
            </button>
          </div>
        </div>

        <div className="display-name">
          <label className="display-name-label" htmlFor="display-name">
            Display Name
          </label>
          <div className="display-name-input-group">
            <input
              className="display-name-input"
              type="text"
              id="display-name"
              value="John Doe"
              readOnly
            />
            <button className="display-name-edit-button">Edit</button>
          </div>
        </div>

        <div className="email-address">
          <label className="email-address-label" htmlFor="email">
            Email Address
          </label>
          <div className="email-address-readonly-input">
            <input
              type="email"
              id="email"
              value="john.doe@example.com"
              readOnly
            />
          </div>
          <p className="email-address-info">
            Your email address is used for sign-in and cannot be changed.
          </p>
        </div>
      </div>

      <div className="password-section">
        <h3>Change Password</h3>
        <p className="password-details">
          Update your password to keep your account secure
        </p>

        <div className="password-input-group">
          <label htmlFor="current-password">Current Password</label>
          <div className="password-input-with-icon">
            <input
              type="password"
              id="current-password"
              className="password-input"
            />
            <button type="button" className="password-toggle-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" className="eye-icon">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="password-input-group">
          <label htmlFor="new-password">New Password</label>
          <div className="password-input-with-icon">
            <input
              type="password"
              id="new-password"
              className="password-input"
            />
            <button type="button" className="password-toggle-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" className="eye-icon">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="password-input-group">
          <label htmlFor="confirm-new-password">Confirm New Password</label>
          <div className="password-input-with-icon">
            <input
              type="password"
              id="confirm-new-password"
              className="password-input"
            />
            <button type="button" className="password-toggle-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" className="eye-icon">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
            </button>
          </div>
        </div>

        <button className="change-password-button">Change Password</button>
      </div>
    </div>
  )
}
