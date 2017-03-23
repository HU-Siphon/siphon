<template>
    <nav class="pure-g navbar">
        <div class="pure-u-1-6"></div>
        <div class="pure-u-2-3">
            <div class="pure-g">
                <div class="pure-u-1-5">
                    <router-link to="/" class="title"><i class="fa fa-graduation-cap"></i> Siphon</router-link>
                </div>
                <div class="pure-u-4-5">
                    <ul class="links">
                        <li class="link">
                            <router-link to="/">Home</router-link>
                        </li>
                        <li class="link">
                            <router-link to="/login">Login</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="scss">
    .navbar {
        width: 100%;
        background-color: #000;
        color: #fff;
        padding: 15px 0;

        .title {
            color: #fff;
            text-decoration: none;

            .fa {
                padding-right: 2px;
                color: #fff;
            }
        }

        .links {
            list-style-type: none;
            margin: 0;
            text-align: right;

            .link {
                display: inline;

                a {
                    padding: 0 10px;
                    height: 100%;
                    color: #fff !important;
                    text-decoration: none !important;
                }
            }
        }
    }
</style>
