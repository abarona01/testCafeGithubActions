
pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
                git credentialsId: '9687da53-ebff-4b0e-b74b-22baa333b715', url: 'https://github.com/abarona01/testCafeGithubActions'
            }
        }
    }
}
