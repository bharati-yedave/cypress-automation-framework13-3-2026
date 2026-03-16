pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Cypress') {
            steps {
                bat 'npm run cypress:install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                bat 'npm run test'
            }
        }

        stage('Generate Allure Report') {
            steps {
                bat 'npm run allure:generate'
            }
        }
    }

    post {
        always {
            allure([
                includeProperties: false,
                jdk: '',
                results: [[path: 'allure-results']]
            ])
        }
    }
}