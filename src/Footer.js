import React from 'react'

import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-wrapper">
                <div className="footer-divider"></div>
                <div className="site-footer">
                    <p class="footer-top"><a class="footer-top-a" href="https://help.netflix.com/contactus">Questions? Contact us.</a></p>
            <ul className="footer-links">
                <li className="footer-link-item"><a className="footer-link"  href="https://help.netflix.com/support/412" placeholder="footer_responsive_link_faq">
                    <span className="">FAQ</span></a></li>
                <li className="footer-link-item"><a class="footer-link"  href="https://help.netflix.com" placeholder="footer_responsive_link_help">
                    <span className="">Help Center</span></a></li>
                <li className="footer-link-item"><a className="footer-link" href="/youraccount" ><span className="" data-uia="data-uia-footer-label">Account</span></a></li>
                <li className="footer-link-item"><a className="footer-link" href="https://media.netflix.com/">
                    <span className="">Media Center</span></a></li>
                <li className="footer-link-item"><a className="footer-link" href="http://ir.netflix.com/" placeholder="footer_responsive_link_relations">
                    <span className="">Investor Relations</span></a></li>
                <li className="footer-link-item"><a class="footer-link" href="https://jobs.netflix.com/jobs" placeholder="footer_responsive_link_jobs">
                    <span className="">Jobs</span></a></li>
                <li className="footer-link-item"><a className="footer-link" href="/watch" placeholder="footer_responsive_link_waysToWatch">
                    <span className="">Ways to Watch</span></a></li>
                <li className="footer-link-item" placeholder="footer_responsive_link_terms_item"><a className="footer-link" href="https://help.netflix.com/legal/termsofuse" placeholder="footer_responsive_link_terms">
                    <span className="">Terms of Use</span></a></li>
                <li className="footer-link-item" placeholder="footer_responsive_link_privacy_separate_link_item">
                    <a className="footer-link" href="https://help.netflix.com/legal/privacy" placeholder="footer_responsive_link_privacy_separate_link">
                    <span className="">Privacy</span></a></li>
                <li className="footer-link-item" placeholder="footer_responsive_link_cookies_separate_link_item">
                    <a className="footer-link" href="www.google.com" placeholder="footer_responsive_link_cookies_separate_link">
                    <span className="">Cookie Preferences</span></a></li>
                <li className="footer-link-item" placeholder="footer_responsive_link_corporate_information_item">
                    <a className="footer-link" href="https://help.netflix.com/legal/corpinfo" placeholder="footer_responsive_link_corporate_information">
                    <span className="">Corporate Information</span></a></li>
                <li className="footer-link-item" placeholder="footer_responsive_link_contact_us_item">
                    <a className="footer-link" href="https://help.netflix.com/contactus" placeholder="footer_responsive_link_contact_us">
                    <span className="">Contact Us</span></a></li>
                <li className="footer-link-item" placeholder="footer_responsive_link_speed_test_item">
                    <a className="footer-link" href="https://fast.com" placeholder="footer_responsive_link_speed_test">
                    <span className="">Speed Test</span></a></li>
                <li className="footer-link-item" placeholder="footer_responsive_link_legal_notices_item">
                    <a className="footer-link" href="https://help.netflix.com/legal/notices" placeholder="footer_responsive_link_legal_notices">
                    <span className="">Legal Notices</span></a></li>
                <li className="footer-link-item originals-link" placeholder="footer_responsive_link_only_on_netflix_item">
                    <a className="footer-link" href="https://www.netflix.com/ng/browse/genre/839338" placeholder="footer_responsive_link_only_on_netflix">
                    <span className="">Only on Netflix</span></a></li>
            </ul>
            <p className="footer-country">Netflix Nigeria</p>
            </div>
            </div>
            <div class="center-pixel"></div>
            
        </div>
    )
}

export default Footer
