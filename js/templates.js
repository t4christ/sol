class Myheader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <nav class="navi"> 
                <div class="container">
                    <div class="logo">
                        <h3 class="sol">SOL <span>.</span></h3>
                    </div>
                    <div class="nav-links">
                        <div class="bar"><i class="awe fas fa-bars fa-2x light"></i></div>
                        <div class="nav-list-cont">
                            <ul class="nav-list">
                                <li><a class="lnk" href="index.html">Home</a></li>
                                <li><a class="lnk" href="mission-fields.html">Mission Fields</a></li>
                                <li><a class="lnk" href="#board">Boards</a></li>
                                <li><a class="lnk" href="sol-blog.html">Blog</a></li>
                                <li><a class="lnk" href="#about">About us</a></li>
                                <li><a class="lnk" href="donate.html">Donate</a></li>
                                <li><a class="lnk" href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        `
    }
}

customElements.define('my-header', Myheader)


class Myfooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <footer class="foot card">
                <div class="mission-fields">
                    <h3>Mission Fields</h3>
                    <span></span>
                    <ul>
                        <li><a href="owudekudu.html">Owudekudu</a></li>
                        <li><a href="akogun.html">Akogun</a></li>
                        <li><a href="ishoko.html">Ishoko</a></li>
                        <li><a href="eriki-nla.html">Eriki-nla</a></li>
                        <li><a href="oyegunle.html">Oyegunle</a></li>
                    </ul>
                </div>

                <div class="mission-training-center">
                    <h3>Missions Training Center</h3>
                    <span></span>
                    <ul>
                        <li><a href="#mtc.html">MTC Professionals</a></li>
                        <li><a href="#mtc.html">MTC Tertiary</a></li>
                    </ul>
                </div>

                <div class="ministries">
                    <h3>Ministries</h3>
                    <span></span>
                    <ul>
                        <li><h4>Educational Missions</h4> 
                                <ul class="inner-list">
                                    <li><a href="owudekudu.html#education">New Life Academy (Owudekudu)</a></li>
                                    <li><a href="ishoko.html#education">New Life Academy (Ishoko)</a></li>
                                </ul>
                        </li>
                        <li><a href="#outreaches">SOL Outreaches</a></li>
                        <li><a href="#conferences">SOL Conferences</a></li>
                    </ul>
                </div>

                <div class="copy">
                    <i>&copy; Copyright 2022  </i>
                </div>
            </footer>
        `
    }
}

customElements.define('my-footer', Myfooter)

class Thehead extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="css/styles.css">
            <link rel="stylesheet" href="css/all.min.css">
            <link rel="stylesheet" href="css/mq-sol.css">
        `
    }
}

customElements.define('the-head', Thehead)