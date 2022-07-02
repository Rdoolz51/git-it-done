let issueContainerEl = document.querySelector('#issues-container');

function displayIssues(issues) {
    if (issues.length === 0) {
        issueContainerEl.textContent = 'This repo has no open issues!';
        return;
    }
    for (let i = 0; i < issues.length; i++) {
        issueEl = document.createElement('a');
        issueEl.classList = 'list-item flex-row justify-space-between align-center';
        issueEl.setAttribute('href', issues[i].html_url);
        issueEl.setAttribute('target', '_blank');

        //create a span to hold issue title
        var titleEl = document.createElement('span');
        titleEl.textContent = issues[i].title;

        //append to container
        issueEl.appendChild(titleEl);

        //create a type element
        var typeEl = document.createElement('span');

        //check if issue is an actual issue or a pull request
        if (issues[i].pull_request) {
            typeEl.textContent = '(Pull Request)';
        } else {
            typeEl.textContent = '(Issue)';
        }

        //append to container

        issueEl.appendChild(typeEl);
        issueContainerEl.appendChild(issueEl);
    }
}
function getRepoIssues(repo) {
    var apiURL = 'https://api.github.com/repos/' + repo + '/issues?direction=asc';

    fetch(apiURL).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                displayIssues(data);
            });
        } else {
            alert('there was a problem with your request');
        }
    });
}

getRepoIssues('rdoolz51/taskmaster-pro');
