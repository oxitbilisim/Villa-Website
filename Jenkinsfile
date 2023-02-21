node {
    def app

    stage ('Clean Workspace') {
        cleanWs()
    }
    
    stage ('Git Checkout') {
      git branch: 'master', credentialsId: 'ba3bdf3e-3541-4f49-a5aa-0644baf85d8c', url: 'https://github.com/oxitbilisim/Villa-Website.git'
    }
    
    stage('Remove Existing Image') {
        sh('docker image rmi villa-fe || (echo "Image villa-fe didn\'t exist so not removed."; exit 0)')
    }
      
    stage('Build Image') {
        sh('docker build -t villa-fe . --no-cache')
    }
      
    stage('Deploy') {
        sh('docker save villa-fe > villa-fe.tar')
        sshPublisher(publishers: [sshPublisherDesc(
        configName: 'Villa Prod Server', 
        transfers: 
            [
                sshTransfer(
                    cleanRemote: false, 
                    excludes: '', 
                    execCommand: '''/root/deploy-commands/deploy-villa-fe.sh /tmp''', 
                    execTimeout: 120000, 
                    flatten: false, 
                    makeEmptyDirs: false, 
                    noDefaultExcludes: false, 
                    patternSeparator: '[, ]+', 
                    remoteDirectory: '//tmp//', 
                    remoteDirectorySDF: false, 
                    removePrefix: '', 
                    sourceFiles: 'villa-fe.tar'
                )
            ], 
        usePromotionTimestamp: false, 
        useWorkspaceInPromotion: false, 
        verbose: false)])
    }  
    
    stage('Clear Untagged Images') {
        sh('docker rmi -f $(docker images --filter "dangling=true" -q --no-trunc) || (exit 0)')
    }
   
}
