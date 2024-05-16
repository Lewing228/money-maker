// Form.js
import React from 'react';
import './Form.css';

const Form = () => {
    return (
        <div className="form-container">
            <div className="form-group">
                <div className="form-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M9.98736 12.7881C6.76434 12.7881 4.01196 13.2754 4.01196 15.227C4.01196 17.1786 6.74688 17.6833 9.98736 17.6833C13.2104 17.6833 15.962 17.1952 15.962 15.2444C15.962 13.2936 13.2278 12.7881 9.98736 12.7881Z"
                          stroke="#D9C77C" strokeLinecap="round" strokeLinejoin="round"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M9.98741 10.0047C12.1025 10.0047 13.8168 8.28966 13.8168 6.17458C13.8168 4.0595 12.1025 2.34521 9.98741 2.34521C7.87233 2.34521 6.15725 4.0595 6.15725 6.17458C6.15011 8.28252 7.85328 9.99759 9.96042 10.0047H9.98741Z"
                          stroke="#D9C77C" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </div>

                <input type="text" placeholder="Номер стола"/>
            </div>
            <div className="form-group">
                <div className="form-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M15.8929 15.8914C13.3461 18.4385 9.57489 18.9888 6.48876 17.5615C6.03317 17.3781 5.65965 17.2298 5.30456 17.2298C4.31549 17.2357 3.08439 18.1947 2.44455 17.5557C1.80471 16.9157 2.76447 15.6837 2.76447 14.6886C2.76447 14.3335 2.62209 13.9666 2.43869 13.5102C1.01077 10.4245 1.56184 6.65208 4.10863 4.10584C7.35975 0.85353 12.6418 0.853531 15.8929 4.10501C19.1499 7.36234 19.144 12.6399 15.8929 15.8914Z"
                          stroke="#D9C77C" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.283 10.3439H13.2905" stroke="#D9C77C" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.94197 10.3439H9.94947" stroke="#D9C77C" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.60115 10.3439H6.60865" stroke="#D9C77C" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </div>
                <input type="text" placeholder="Комментарий"/>
            </div>
            <div className="form-group">
                <div className="form-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5414 3.54199V5.55866" stroke="#D9C77C" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.5414 14.8003V16.487" stroke="#D9C77C" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.5414 11.9374V7.91992" stroke="#D9C77C" strokeLinecap="round" strokeLinejoin="round"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M15.5852 16.6668C17.1036 16.6668 18.3334 15.4523 18.3334 13.9528V11.7924C17.3287 11.7924 16.5195 10.9933 16.5195 10.001C16.5195 9.00879 17.3287 8.20882 18.3334 8.20882L18.3325 6.04754C18.3325 4.54804 17.1018 3.3335 15.5843 3.3335H4.41584C2.89832 3.3335 1.66762 4.54804 1.66762 6.04754L1.66675 8.27921C2.67148 8.27921 3.48065 9.00879 3.48065 10.001C3.48065 10.9933 2.67148 11.7924 1.66675 11.7924V13.9528C1.66675 15.4523 2.89658 16.6668 4.41498 16.6668H15.5852Z"
                          stroke="#D9C77C" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </div>
                <input type="text" placeholder="Промокод"/>
            </div>
        </div>
    );
};

export default Form;
