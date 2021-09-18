<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>World Banc</title>
    <link rel="stylesheet" href="fonts/style.css">
    <link rel="stylesheet" href="dist/css/style.css">
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="https://jqueryui.com/resources/demos/style.css">
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
</head>
<body>
    <header class="container">
        <div class="header_wrapper">
            <img class="logo" src="image/logo.png" alt="">
            <div class="number">
                <span>8-800-100-5005 +7 (3452) 522-000 </span>
            </div>
        </div>
      </header>
      <nav class="container">
        <div class="navbar">
            <ul>
                <li><a href=""> Кредитные карты</a></li>
                <li class="active"><a href="">Вклады</a></li>
                <li><a href="">Дебетовая карта</a></li>
                <li><a href="">Страхование</a></li>
                <li><a href="">Друзья</a></li>
                <li><a href="">Интернет-банк</a></li>
            </ul>
        </div>
    </nav>
    <div class="container">
      <div class="bread_crumbs">
        <a href="#">Главная</a> - <a href="#">Вклады</a> - <a class="active" href="#">Калькулятор</a>
      </div>
    </div>
      <main class="container">
      <div class="row">
          <article class="col col__article">
            <div class="calc">
                <h1>Калькулятор</h1>
                <div class="flex_container">
                <div class = wrapper>
                <div class="row">
                    <p>Дата оформления вклада</p>
                    <input type="text" id="datepicker" placeholder="дд.мм.ггг">
                </div>
                <div class="row ">
                    <p>Сумма вклада</p>
                    <input type="text" name="currency-field" id="deposit-amount" pattern="^\d{1,3}(,\d{3})*(\.\d+)? руб." value="" data-type="currency" placeholder="1,000.00 руб.">
                </div>
                <div class="row">
                    <p>Срок вклада</p>
                    <select class="select-css" id="deposit-term">
                        <option value="1">1 год</option>
                        <option value="2">2 года</option>
                        <option value="3">3 года</option>
                        <option value="4">4 года</option>
                        <option value="5">5 лет</option>
                    </select>
                </div>
                <div class="row">
                    <p>Пополнение вклада</p>
                    <div class="light">
                        <label>
                            <input type="radio" name="light" value="0">
                            <span class="design"></span>
                            <span class="text">Нет</span>
                        </label>

                        <label>
                            <input type="radio" name="light" checked="checked" value="1">
                            <span class="design"></span>
                            <span class="text">Да</span>
                        </label>
                    </div>
                </div>
                <div class="row">
                    <p>Сумма пополнения вклада</p>
                    <input type="text" id="replenishment-amount" name="currency-field" pattern="^\d{1,3}(,\d{3})*(\.\d+)? руб." data-type="currency" placeholder="1,000.00 руб.">
                </div>
              
                <div class="row">
                    <button id="calc_btn" class="button">Рассчитать</button>
                    <div class="result" id="result">
                    </div>

                </div>
            </div>
            <div class="range_aside">
              <div class="range" id="deposit-amount-range"></div>
                <div class="range-row">
                  <h6 class="left-side">1 тыс. руб</h6>
                  <h6 class="right-side">3 000 000</h6>
              </div>
              <div class="range bottom" id="replenishment-amount-range"></div>
                <div class="range-row">
                  <h6 class="left-side">1 тыс. руб</h6>
                  <h6 class="right-side">3 000 000</h6>
              </div>
              </div>
              </div>
        </div>
      </main>
            </div>
          </article>
        </div>
      </main>
      <footer class="container">
        <div class="footer_wrapper">
            <ul>
                <li><a href="#">Кредитные карты</a></li>
                <li><a href="#">Вклады</a></li>
                <li><a href="#">Дебетовая карта</a></li>
                <li><a href="#">Страхование</a></li>
                <li><a href="#">Друзья</a></li>
                <li><a href="#">Интернет-банк</a></li>
            </ul>
        </div>
    </footer>
    <script src="dist/js/script.js"></script>

</body>
</html>