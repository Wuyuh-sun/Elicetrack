# 엘리스 트랙

## git submodule

- 저장

```
git submodule add <다른 사람의 깃 저장소 URL> <하위 디렉토리 경로>
```

- 서브모듈 최신 변경사항 가져오기

```
// 서브모듈 디렉으로 이동후
git submodule update --remote
```

- 루트 서브모듈 저장소 url 일치 확인

```
git submodule sync
```
