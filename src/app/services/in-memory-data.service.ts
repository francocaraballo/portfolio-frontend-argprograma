import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {

    const works = [
      {"id": 1,
      "title": "Primer trabajo",
      "urlImage": "https://www.censo.gob.ar/wp-content/uploads/2021/11/Miniatura-enlace.jpg",
      "description": "Fue un muy buen primer trabajo"
      },
      {"id": 2,
      "title": "Segundo trabajo",
      "urlImage": "https://www.fiq.unl.edu.ar/aniversariofiq/wp-content/uploads/2019/03/fiq_new.png",
      "description": "Muy buena experiencia"
      },
      {"id": 3,
      "title": "Tercer trabajo",
      "urlImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABLFBMVEU3gIv/7QD/7wAAAADf0AD/8AD/8gDj0wAwcHr/8wDn1wD66AA2fYgydH725QCtoQAtfY306ADx3QAzMAAUdpEsfY+lmQD/9wDHuQAmeo8ieZDr2wDp1gDKvAApJgDy4QCYjQB/dgBLRgCLgQAiIAA/dnZsZACAl1a7rgBfWAAnJQCdkgBWUAB0bACbp0RCfn+XpEt1kVu0tTWRoFDLxBVnimEXFQA7NwDEwCVEPwAMCwB7o2emt2Hd2Si5xEVBhoNPjXuxv0xllnbVxgBQSwAcGgDR0jOvvFpIfnNfiGtki2y5uStLfWsabX+ztTsaa4EtaXJOc1pigFijqz+KnVWJqmHFyz1KiYJbknVvnWve2xWUr1+Al13KzzqtvlIAcpScnCNzhE1DbWAJUWMu2TQWAAATbUlEQVR4nO2deUPbPJPAI8WSsV1SQzGOY2iAlAKlQCnQ0tJwpQeUa/tSSjnKPs/u9/8Oq9N3EpsmJGQ9f/TwIeuX0UgzI1kuFHLJJZdccskll1xyySWXXHLJJZdccskll1xyySWXXHLJJZdchDxxLLPXdeiuuEdzB5WBhoQIl+rLhyfOwEICACDEoHq0OjSgqgRcINawsnxMrLLXFeq4AF8Q1vSj24GzShASiLRSY/n7QFkliAq3ytvhsUFRZYyQWyWGxCqdgVBlIqHoe9yj1ZXH7xA0JRRWuf7mcPhxq7IVIYPEwH17O1t5vKNIG0LAuh4EGssHY49Ule0JhSrt0aPVJ1aXrfJJF8pMR8gosWYQq3xS6SLkcBcQ0xNyVUL97e1K19yenhNyVWLi9hxXumKVfUHIVYlGjzaGOz9W9gshVyW1ShKMBCGH7l0NQdZRQlHWfQmFKvW3qwGrHL53bcRv01FCUeZfEHJVYuL2HJ9xVQ4iIRBuz9HqCXF7Hpqw9V0dI2SUWENElfePK7tMCDPiJB9GWJsMWWVAeBVaqLi7hNDNhGiUml6uY61K3J64KoeCj+wBoZKFEJaa/yAqFMHIxlA4GBkeIEIggpH1tYOAQzBghOwqYpXqqZciGEBCdiW1yjXWwQ4oIWCqNPTT1eEza1AJAbNKaMyv0RTBgBKye3SkEQ/2v5qnCB49oUqt0m4Qq2ySuBsEQvocjIF+ujGckLgbFELIrLK0vhZL3A0OIfubxJXuaThFMFiE7N80RbB2YEpVDh4h4Ik75VQEIwNJyA5hTN2eijWwhICnCPS3P85YBzuQhPQE1CYgtUprUAnpKYQwVs7/ky2d/qgI6Smoue7mz4P06fRHR0j8V4MFIxsn6eYrHyUhTxEYmz9nU8zkPVJC9g+ENeV8o92ywgcghAgF7+0YIfsP1tzNtYNWOdjuE2pQUQy7S4SALZUw1ORg5EEIoTb+rlj8WNO82ztNCIAMRmYTVxF0npA4WRgbkhAvFZm8xvL+LhCyw8wqv8etsuOEUJ0vl8vzDcQB54tCnuLuErJT2B4lY6WTNF/ZOUJtMQiEX0rC91r3CQG3StLBBqyy84TjIcJnkvCFnMnoLiEQVknGSmGV3Sb8IAmfg4ciZBchjNTTQ4dYZZcJtSlJ+FIOGA9CyC7EGlGlHCu7RQirHwWhih6aEDCrBPPcKrtFCLDyjv2/LDuaByVkxWqwSqzyrGUOtvWTwxIhBNh4urQ0XsXeBQ9NqPD5ysnz4yTIDhBSc9Bw4OYeENK/XGCXNudWzOQcbOsnhyVGGJUeEZK7qFVSt6cSz8G2fnJY+pgQ8LjSPQqkCAaOkP0TYeL2iKUSA0kIuCqJVQ5b1qASsiNIQ8r5Dx6MtH5yWB4NITuqTbA3DwuQaFXFMEFIKIjCRySh5h1g4p0HuryBjCK2bdOhhAnSAT2o+M/BXLzr+SnkGpFKIIw1IThWyyZ3sVswIlhYM+oFRVHUeSUiqu66+iQRl/yteof1GiOc8o4sThGp+feVxe3ufG16YWFhulZ21cCJsix+Qjm/2draunizOaGG7iw3wvWYaPyztrpxSGTjdnl+YkINnZ4Ud00qKhV5z+nP1dXbtfUJdlblOtSNgLawDSanPguX8+PCuIJslKhDZLxi//d+W65DrJXfS5+8+GEealEdatdbJDBgUtm5G9GC2lCAVxMywh0dVizLFGI5Q3MK8hUJdNH40OgnJuwZcG/HobdYlf11dpbbIdINaSIIK9PFsDwbL/FUTMQOocEjRD/dRu0QV1+G7n4/SRACdgjhXfAlR2dlj1TWsyjg1QSXzmejrwVYlcNNIN183btr1KQ/WGUEAlzfrXglb7IrZU8jCoa2slCMy7txVm4aQqw/j949bWCfEMKLSrjalf1r7PcZkNcEapsHToI3bVa+K/zxqt/TjLLYwhyB+Jfp/SbOJ97vSUKo0oIRqiXwMU2oWipCaLxLuNl1PUJ8ISpuepWxCn80n5AhQvCzWZrUdM5tCJAC4oTatv+jmJdACREyRDz6Pl49KfN2GkLNawIfPntZjuK7eSieg7fHOJX1+2qf/CnUuK0GsvqqgavHsq6WY5o7u7sFYoYSuTIHGWCM8KvJiyY/nlP5hSOE1AaUANDz10ukn1yaeeUdWbRLtXaEWllorYzIaGGUX4t7nyH+HAj4D7yyN6JhDdcvChbXpxsY2ZDuHljSSre2rxEdK4z63n5BHl1VQZywcM2KKlzUoW38+SRbfmDE17zsYPHZlAJsWi6pZaP2QhydAm11qHGkl5DFVKRbLjOrfC1/crRHdWPuujzmgvj6yqG1ug7oEMDSLFeXQ3paLEqnfev1jWB0VgGME+6Su6zdOmbWjkGMEHsafDFvaF6tIbJL4yJdUX7ahlDX2YEZ/wgukZ71Q1UXhPi3yfsE4BW/R1pfHQfnnsAG56hcjASDT/qDuFu8m3J+anFC2kJ/jyDv6qgdVmUXUQPhckm/VhLWNd2OkDdSJeDWQXv6RUn2pWhkhVbvLuj24a+FOgr6X3iZ26CzHakHY9zm6q28xQmE5k5gEXqU0JadTNmOe4/QHg+YaHNCl6XfZmCoBDqiS8I6rV9lJHSeTl8FCNE6ZzC/Jrq/uC5s0YVxQqceKDlCaC+K6k/aSeVCYzEVIVPyUqwIb13bV9rIduKr/QPjoXFo8u41+Z0A6PIe09xAMULrAsfLFIRQlxp0jYSC4ehoQIvtCF9qsftDhIVWhPiItVHnQtMTa6ICbY8V4qyjKKF5DeNlCkJbTCNN2XzojxRbHSWd01LaVvouVkKkldZbEBrHTEVEz+Sm2HWI1k7bNbkSI4TmFU4okxPKfvSDLb2bKCDled6WUPQ0T6NKhKGexryKK9nzSzcd3kZZRxK7jNUN1pkST3QcJnS2UUKZnNCu8boriP+Q4T666obHy7ajRdGNdBKe581Hi7Ff0U7EI4QbTIWXTH3EcwnXRNQM7dOLrGUtTLhShQllckKDD+rSgEKIxAbF/7T37QjliP/KDWvJI+QjfsH8E/0JJCGvrPMNy/uCNZH1Qsz/NA8jXtsuTiqTEaoNXvWGF5j4iD4gwE/bEwo9v5gMjTkeIRwR/fodSvq9obvOR3TZZfAbufghHnTZRSdGiNDaak6o86HAH8d8W+Q2KP4N2hJCW3qi09Cf3g/kaaTn7exXg+O5p4031J0x922ZurAnZBbDHkX+0SvWY62rIcJvLQh5zDrlNy2JKG2Qi/25LSE0vEFlHmH/F/MeqW1xj8Uc+2T4jB4hN0NzzJNKwr/GxthVztsQobMX6mjCrfRLuJEC2eaDGgTRWe4mEbArHfXiszKUVwYjYIFI/WpDPlESqscZ1u1Zy3qI8FfE2QwS8hrpoStoMDoaApRrE9pkMdwZT42fGzaMEJK2fiOD/MrlLxk58Nqgxk56wIJ5OxFqpV+bEiLe0TwLv1dIxqZqNZxOFMOmn4nihNFMFKx5iMVpg14czkThPzLQI+Z4rQXygljJ8g6quREiDHs0IULMx+mZcA9vqPOT4eQdEW6v3mHuA/hXieye/tQP77/M6/FsYuNKBuymuaz6p9R54XVHxIoe4EePMxJ+DjvMsFp1jbAOkZFGhyyh+NSzxuK4hqIZYaTV9yVjZQuiiA7NkbAoVWUkSRQ1LeEkq8mHsFdHbTDq3Rgp7JCLZsiwmbRUnPQ2wp/fFdlSR6Bnh9yiRkI/rFuCSAUwJkgNE440t0Pe+J4H7VB0MmFEcWEaQhI2Vz1zXLQT5i0Q3N4Roe4V9PrSA0YYdM2RzuoVGPp9hLSECX2pHCbCbrhozqkIKaMiV9woMosRqgIybvjwX9nzPEwWHDq//HFLACbN+sDUOoQqr+mkPz/vDfQhxDTjYQhBevQLiYTkN/haEIYnCedoL2vd+DXRvZYVm7nKQKjz/EtNdqYhVy3QUO2FbITkDuHKevnSiOBrNgA6d6Ku7hHPxXmegBuIF6INFaVvpTqP358JRz4y0PsOLypmJQQ2//Fe4mRCgP+waHZX9Pu6y7sfYYghQDpTIStPk2VED9GsflNC1S0GmmnEVfMbqlxumYUQ8YjxC2pCCDCL9caqghAxt835hBMAodQiBLs3hFE3UhMqkHcJbMyPAvqI9kx2QiCCjaaEPGKsXAtCwNM0K7S2EUD/AfjGcQp7UI3NzDQnlGkmosRwNCGuZQ1VDJsZCbXp1oTwK+1bROqG5mlmmWGSviYBkNsiYlkMZ6WB0xMisQjvOUCjUQ0yoW44eP8QhPicZwHqOAmQIkKww2z32EAZWqkmuvVaKbFYiih7/jbxIYrcKPpfjzBaPM9IeK3UgMYBq/9OMiCpCbxifrtzhDO0Uj9wHU9MCFOb8OdtWhBivREJtHnreC77UhhNQmk8XB+VhADzbJv1O57TZ5fAK34+lhFuTSjdFTpNmFQwtMvFFIR66XlRDYUoQvNLghBf/Hd4NgKxDLa5P+ERAvzTEe5qtD3Q64EIoIer0ax+G0Igc8IkFIgjIpRu3kKhHWc5UIAtNF/mI7525xQq3wLTGqh6yUaHveAMKeCBvnVZj6oR4q+XHHBsPTYz044QAulEvqxGGKGti7mn1j4NxDPCmEUBWLo0wmtTty3maF+L81CrX/IYSnptfP7QHea+nPkpOL0GEa5viaWHzmnAhUhJCLD+RSC+Gwe2PwuH5dQviRFaz5DKbGPxy7hr0wVDk3LKu8EIkUgVWk9urjWMseZ+4m5p5Q6HCEvrw3KK9KZO1xXR1y+1ke19U04Cn+MAQ1odkoDXX2RQa4i1SBiWvfmKRbu15w3BF6+AVwtL3lL+4pSIntQ7HksULGvn6uJqV0zjW/te9MRaadXV6gKRzvRf3Xz79u3T1qU3kW86R1CFWQnpQI+N4EKFmdrU1NS0X00S2rddqZC4VKW4oHlzT3feYgnTW+pqXlaDhMzlwO5xxb+SifxvwZlVNGhQxEyjBRvoIVhKqiFveY0UazF0GF1tVKST+v6KIfyrEH0NzbmsBmdIhU8F4ZuTxBfWrJO1EqLP1lMRQiTmnoQnA/H8l3gVqSyVcJr1NEibjC5YWaRhgJ/zdrdC276blS0joA3dkE4jxNdzZ7E1Q9bZrehgKaJPyBaYxAiJCetHBUTXtZW8tKEGpopxmVFsmimKrWvjubZQJkpD5ZnAnUs6XRQXyEQhfH1hOny1EF189lVDMLCuza16pWGten4wZpleVs46O1h2vRWKCOjyrtF9JqHsDsK20qA7VxbKNIcXTBvqSi28buvd63mxwlCd+vjixYuPi97VNSrTkbWJqtuofX5FLnz1utZIWJuoTqjnt8ezKyuzh2vr0bWJ5VACk65N/Pd/Zpn8+PefyQk9dNpbm6hOUAncpyqNt//+79nJ0NBQYU2Lri9Fmu2Wawuf3z97NvN66WkD2N5pumjUhn6euMn6UsSuo+OFuDKaTZSzLfH1pdGUGvKWlwauhtG7jNANqLpJN6KQb0WtANmRBZswJnUEhkH+xChy8kHedE4nsbvo+3uN8+/D/J0EQehsoiZPhjD5cJ8SQvZph9UV/yV3QWiuai2enFRsPxLSV/jX3yS/YVp44qLHTQjxaElN2oZBEjqn2uMlRBBDd3MueSsNSehN+Kcttm8IIZ4wGsuHTyonLd8/JJ690qxiyeX2BSEd0d2j//B+pfUblsQTWntkhGyfQrYJQar3gOkFSkK6oHn5vSWk39zwXllPS+j80/Q1n6RH9I6QvkGjH835g0JaQvNHkwRb8mN6RMh2eCP9Svp97AJbbZ7oGQyxF4Rs9/eEjfzTE55naKYPTci3UYjvtJiJcOggabFqPxCG+pWmDCkInfX0vemDEbLNlo9uD1p8dSo9oTWXvpk+zD5RpF8B62+OzdYbRaUnjC4+7S0h3URAfUtd6XYrpDIQstcX+oIQYboRRMpd6TIQmt/7QYcQg1J9WYbonSUsVFIPid3bN5FuF53tO29ZCK3ltM20O3tfqmwj/qyfx8hCWBh6AMLE02wbhNMfKXdK/AvCStoh8f6EiXSQ7XZpDSXWMSVhEwl8MIReaK7GXvPoMqF0pYP7CHeUMHrhk5RfKrkPIYhv64Bt0q/4X6q7H2G2HWv5tGqXCEMFtNonsJtiHqb7os7fEdJPSLdwpbsrVrqU2/0JeZQ3l31Q6BjhWrpmajT3YVsQet9p6+WXW1eaf+YoXNmmZ5pol3+grRvf2ssolc0sObeU7LRfqTYJ0R9czI0sObdUxCREr7PZrl6zCTlLHyWmoaOpP+JK94PypDhZMlIt6ViIvhb5/mM/yGxKz601Hg3RT9OE6D2QLBmpZspjrnRf9CtJYs39jRLppqKNLCF6LyRDRipCd58QvRfipM9IBejYLPo9QvReSIaMlK88EqKn/ZhBH4iTZbaUhehHTWbR+1UyZKTEh8j73vKiMpsmSuQh+kb/9ytJ0jYjxWbRN3sQondKWmekuCv9iPqVJDlpFiX2PETvlCRnpPoiRO+QmMexzWP6JUTvlJiNQDOlW7uVMn2D6RGItab5TbO0Tlxp5zH3KwlisowUm0V/u7ozME0zKJVNzPuV6DbuAyPmqn76/ayvo7y/FXOg+pVccskll1xyySWXXHLJJZdccskll1xyySWXXP6fyP8BYGksg/pLZw4AAAAASUVORK5CYII=",
      "description": "Colocacion de placas de yeso, espectacular"
      },
      {"id": 2,
      "title": "Segundo trabajo",
      "urlImage": "https://www.fiq.unl.edu.ar/aniversariofiq/wp-content/uploads/2019/03/fiq_new.png",
      "description": "Muy buena experiencia"
      }
    ];

    const studies = [
      {
        "id": "1",
        "urlImage" : "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7a3ec529632909.55fc107b84b8c.png",
        "institution" :"Secundaria Nuestra Senora de Fatima N 3050",
        "title" :"Bachiller en Economia"
      },
      {
        "id": "2",
        "urlImage" : "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/46190b63764575.5abb892616e9e.jpg",
        "institution" :"Facultad de Ingenieria Quimica",
        "title" :"En curso"
      },
      {
        "id": "3",
        "urlImage" : "https://www.graphis.com/media/uploads/cache/56/f8/56f8cbc0224c3835fcbf50212e49f7e9.jpg",
        "institution" :"Argentina Programa",
        "title" :"Desarrolador Web Full Stack"
      },
      {
        "id": "4",
        "urlImage" : "https://files.cults3d.com/uploaders/15233766/illustration-file/1eed0015-b833-4838-b577-1785b9c96a35/1.jpg",
        "institution" :"FreeCodeCamp.org",
        "title" :"Conocimientos basicos en HTML y CSS"
      }
    ];

    const hardSkills = [
      {
        "id": 1,
        "value": 26,
        "type": "danger",
        "description": "Trabajo en Equipo"
      },
      {
          "id": 2,
          "value": 50,
          "type": "dark",
          "description": "Comunicacion"
      },
      {
          "id": 1,
          "value": 25,
          "type": "primary",
          "description": "Responsabilidad"
      },
      {
          "id": 1,
          "value": 80,
          "type": "success",
          "description": "Flexibilidad"
      }
    ];

    const softSkills = [
      {
        "id": 1,
        "value": 30,
        "type": "success",
        "description": "JavaScript"
      },
      {
          "id": 2,
          "value": 50,
          "type": "danger",
          "description": "HTML"
      },
      {
          "id": 1,
          "value": 25,
          "type": "dark",
          "description": "CSS"
      },
      {
          "id": 1,
          "value": 80,
          "type": "info",
          "description": "Angular"
      }
    ];

    return {works, studies, hardSkills, softSkills};
  }
}
