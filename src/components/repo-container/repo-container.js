import RepoList from "../repo-list/repo-list"

function RepoContainer() {
    return <RepoList prm={() => fetch('https://api.github.com/search/repositories?q=javascript&sort=stars')} /> 
}

export default RepoContainer;