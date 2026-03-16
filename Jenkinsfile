// Jenkins Declarative Pipeline
pipeline {

    // Run this pipeline on any available Jenkins agent/node
    agent any

    stages {

        // Stage 1: Clean old dependencies from the workspace
        stage('Clean Workspace') {
            steps {
                // Delete node_modules folder to avoid corrupted packages
                bat 'rmdir /s /q node_modules'

                // Delete package-lock.json to force fresh dependency install
                bat 'del package-lock.json'
            }
        }

        // Stage 2: Install project dependencies from package.json
        stage('Install Dependencies') {
            steps {
                // Install all Node.js dependencies
                bat 'npm install'
            }
        }

        // Stage 3: Install Cypress binary required to run tests
        stage('Install Cypress Binary') {
            steps {
                // Download and install Cypress executable
                bat 'npx cypress install'
            }
        }

        // Stage 4: Execute Cypress tests
        stage('Run Cypress Tests') {
            steps {
                // Run Cypress tests in headless mode
                bat 'npx cypress run'
            }
        }

        // Stage 5: Generate Allure HTML report from test results
        stage('Generate Allure Report') {
            steps {
                // Run script defined in package.json to generate Allure report
                bat 'npm run allure:generate'
            }
        }
    }

    // Post actions run after pipeline finishes
    post {

        // "always" means this runs whether tests pass or fail
        always {

            // Publish Allure report in Jenkins UI
            allure([
                includeProperties: false,   // Do not include environment properties
                jdk: '',                    // Use default JDK
                results: [[path: 'allure-results']]  // Location of Allure result files
            ])
        }
    }
}
//updatede