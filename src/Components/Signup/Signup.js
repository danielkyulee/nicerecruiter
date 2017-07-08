import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

class Signup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {email: "", linkedin: ""}
    }
    

    signingUp = (e) => {

        e.preventDefault();
        console.log(this.state.email)
        console.log(this.state.linkedin)

        return axios.post('/signup', {
            email: this.state.email,
            linkedin: this.state.linkedin,
            third: 'fdsf'
        }).then(res => console.log('res obtained', res))
        .catch(err => console.log('some err', err));
        }
        
        // this.setState({
        //     email: "",
        //     linkedin: ""
        // });


    

    handleChange = (e) => {
        
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        
        return(
            <div>
                <h1>Manually connecting companies with engineers who are considering switching jobs.</h1>
                
                <form onSubmit={this.signingUp}>
                    <label>Email</label>
                    <input
                    type="text"
                    className="email"
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.email}
                    />
                    <label>LinkedIn</label>
                    
                    <input
                    type="text"
                    className="linkedin"
                    name="linkedin"
                    onChange={this.handleChange}
                    value={this.state.linkedin}
                    />

                    <input
                    type="submit"
                    className="submit-button"
                    />
                </form>

                <div>
                    <h2>How It Works</h2>
                    <div>
                        <img src="" alt=""></img>
                        <h3>1. Tell us your email and LinkedIn URL.</h3>
                    </div>

                    <div>
                        <img src="" alt=""></img>
                        <h3>2. When a company is interested in you, we email you asking for permission to introduce 
                        you to the company.</h3>
                    </div>

                    <div>
                        <img src="" alt=""></img>
                        <h3>3. If you say yes, then we will send an introductory email to both you and the company. :)</h3>
                    </div>
                </div>


                <div>
                    <h1>FAQs</h1>
                    <div>
                        
                        <div>
                            <p>So how does this exactly work?</p> 
                            <p>It really is simple! Once you give us your email and LinkedIn profile, I’ll reach 
                            out to introduce myself and take any questions. Then, whenever companies come to me with 
                            engineering candidate suggestions, I’ll send the company with who I think fits their team. 
                            If the company agrees to be introed to the engineer, I’ll reach out to the engineer and ask 
                            if I can introduce you both. Once you confirm, I’ll send a group email to both of you! If 
                            you say you are not interested, then no problem! Nice Recruiter is for passive engineering 
                            candidates, so you should be really picky. :)</p>
                        </div>

                        <div>
                            <p>How much does this cost?</p> 
                            <p>Nice Recruiter is completely free for software engineers. We charge companies $75 
                            (junior to mid-level) or $150 (mid-level to senior) per introductory email. </p>
                        </div>

                        <div>
                            <p>Will you introduce software engineers who have no experience or are just out of college??</p> 
                            <p>Unfortunately, no. We only work with engineers who are passive candidates (currently employed). 
                            This is our sweet spot.</p>
                        </div>

                        <div>
                            <p>How often will you be emailing me?</p>
                            <p>It really depends. If your particular skills are high in demand, I might email you a lot because all 
                            the companies would be interested in your resume. </p>
                        </div>

                        <div>
                            <p>I’m looking to recruit software engineers. How does this work?</p>
                            <p>Great! The process is super simple. Email me what kind of engineers you are looking 
                            for (e.g. ‘I’m looking for an engineer with 1-2 years of experience and want to get into a startup). 
                            Then I will look through the list of available software engineers and send you as many as you w
                            ant me to send you (max 10 per email). The list will look something like this:
                            <ul>
                                <li>“Has been software engineer from Facebook for 1 year and 3 months. Graduated from an Ivy League.”</li>
                                <li>"Has been software engineer from MFST for 12 years; started as a summer intern and worked 
                                way to director of engineering. Currently a director at a B2B series C startup in San Francisco."</li>
                                <li>“Started his own startup out of college as CTO; it was angel-funded. Then worked at a Y 
                                Combinator-backed startup (startup has raised 2.5 million) for the past 12 months.”</li>
                            </ul>
                            From that list, tell me who you are interested in. Then I will manually email those engineers 
                            asking if they are interested in your company (I will explicity state the name of the company). 
                            If they reply yes, then I will write an introduction email to both of you. From there, it’s your 
                            responsibility to follow up and close the candidate. Then I will bill you. 
                            </p>
                        </div>

                        <div>
                            <p>How is this different than a recruiting agency or a company liked Hired?</p>
                            <p>Most recruiting agencies and startups want to be part of the entire recruiting process from sourcing to closing.
                            While there is definitely a need for this, most companies (especially startups) can't afford to pay
                            the typical 30% (of an engineers first-year salary) per hire. In my experience, one of the most difficult
                            aspects of hiring engineers is finding engineers who are even willing to talk with the companies. This 
                            is where I want to help. I want to help get engineers in your door as efficiently as possible so you can
                            work on closing them.</p>
                        </div>

                        <div>
                            <p>Will you introduce the same engineer to many companies?</p>
                            <p>Yes. I don’t guarantee that the engineer who is introduced will join your company. 
                            But I can guarantee the engineer explicitly told me that they are interested in speaking with you.</p>
                        </div>

                        <div>
                            <p>Will you help recruit engineers beyond the introduction?</p>
                            <p>That’s not really the point of Nice Recruiter, but I might be able to. Email me 
                            and we can talk about it. :)</p>
                        </div>
                    
                    
                    
                    
                    </div>

                </div>

            </div>
        )
    }
}

export default Signup