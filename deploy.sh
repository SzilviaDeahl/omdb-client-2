aws s3 sync . s3://szilvia-deahl-omdb-client-2 --acl public-read --exclude ".git/*"
open http://szilvia-deahl-omdb-client-2.s3-website-us-west-2.amazonaws.com/
