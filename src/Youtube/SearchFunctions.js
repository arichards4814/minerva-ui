/* <script src="https://apis.google.com/js/api.js"></script>
    <script>
  /**
   * Sample JavaScript code for youtube.search.list
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/guides/code_samples#javascript
   */ 

   //import api from gitignore file
import React from 'react'

import { gapi } from 'gapi-script';

class YoutubeSearch extends React.Component{

    componentDidMount() {

        gapi.load("client:auth2", function () {
            gapi.auth2.init({ client_id: process.env.REACT_APP_CLIENT_ID });
        });
    
       
    }


    authenticate = () => {
        return gapi.auth2.getAuthInstance()
            .signIn({ scope: "https://www.googleapis.com/auth/youtube.force-ssl" })
            .then(function () { console.log("Sign-in successful"); },
                function (err) { console.error("Error signing in", err); });
    }

    loadClient = () => {
        gapi.client.setApiKey(process.env.REACT_APP_API_KEY);
        return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
            .then(function () { console.log("GAPI client loaded for API"); },
                function (err) { console.error("Error loading GAPI client for API", err); });
    }

    // Make sure the client is loaded and sign-in is complete before calling this method.
    execute = () => {
        console.log("worked")
        return gapi.client.youtube.search.list({
            "part": "snippet",
            "q": "NgWdv081oqQ"
        })
            .then(function (response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
            },
                function (err) { console.error("Execute error", err); });
    }

    render(){
        return (
            <div>
                <button onClick={() => this.authenticate().then(this.loadClient)}>authorize and load</button>
                <button onClick={this.execute}>execute</button>
            </div>)
    }
   
}
// </script>
    
export default YoutubeSearch