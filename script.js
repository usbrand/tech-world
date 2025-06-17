document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const googleBtn = document.querySelector('.google-btn');
    const facebookBtn = document.querySelector('.facebook-btn');

    // Google Signup Redirect
    googleBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'https://accounts.google.com/lifecycle/steps/signup/name?dsh=S1109600202:1749972715583640&flowEntry=SignUp&flowName=GlifWebSignIn&TL=ALgCv6znG3zI1f2EcVLt0CvbTnSZio5H3ZyU-jC4ELZIX5ErU1U9OHsL_wM-mUOh&continue=https://accounts.google.com/ManageAccount?nc%3D1';
    });

    // Facebook Signup Redirect
    facebookBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'https://www.facebook.com/campaign/landing.php?campaign_id=1653377901&extra_1=s%7Cc%7C358050429326%7Ce%7Cfacebook%20create%20account%7C&placement=&creative=358050429326&keyword=facebook%20create%20account&partner_id=googlesem&extra_2=campaignid%3D1653377901%26adgroupid%3D65139788602%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-309327057760%26loc_physical_ms%3D9199207%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gad_source=1&gad_campaignid=1653377901&gbraid=0AAAAAD2MkOU92CyQr_PF1xiN7vfVmC_F2&gclid=CjwKCAjw3rnCBhBxEiwArN0QEyU3wCcOu3LPNBDspX2nIbBXuRe2BYMfdhYTcgJ9jFfGA5-4qe8R9RoCne8QAvD_BwE';
    });

    // Form validation and submission
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        // Validation checks...
        if (!username || !email || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        
        if (password.length < 6) {
            alert('Password must be at least 6 characters');
            return;
        }
        
        // Show loading state
        const submitBtn = document.querySelector('.submit-btn');
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating account...';
        submitBtn.disabled = true;
        
        // Redirect after delay
        setTimeout(() => {
            window.location.href = 'http://127.0.0.1:3000/gaming/gaming.html';
        }, 1500);
    });
});