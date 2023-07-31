# Recruitinator
An Open Source ATS


## Self Hosting

Follow these steps to clone the repository, build the Docker image, and run the Docker container:

```bash
docker run -p 3000:80 mikeon/recruitinator-frontend
```
or
```bash
git clone https://github.com/cyberdynesystemscorp/Recruitinator.git
cd Recruitinator/frontend
docker build -t recruitinator-frontend .
docker run -p 3000:80 recruitinator-frontend
```