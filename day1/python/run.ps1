docker run -it --rm --name my-running-script -v ${pwd}:/usr/src/myapp -w /usr/src/myapp python:2 python script.py