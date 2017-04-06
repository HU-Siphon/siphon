<template>
    <div class="pure-g dashboard">
        <div class="pure-u-1 dashboard-inner">
            <div class="_center">
                <h1 class="dashboard-title">Welcome to Siphon</h1>
            </div>
            <p>
                Siphon is still in development. It won't be perfect for a while.
            </p>
            <p>
                Siphon is a replacement for Harding's Pipeline. The main purpose of this site is to provide an easier way to navigate through Harding's online resources.
            </p>
            <h2>Getting Started</h2>
            <p>
                In order to use Siphon, you must first login to <a href="https://pipeline.harding.edu/">Pipeline</a>, otherwise you won't be able to access anything here.
        </p>
            <h2>Contact</h2>
            <p>
                If you discover any issues with Siphon, contact <a href="mailto:jshepherd@harding.edu">jshepherd@harding.edu</a>
            </p>
            <h2>Security</h2>
            <p>
                As it stands, Siphon doesn't touch your Harding username, password, or any other sensitive data. We only provide a better interface to navigate through Harding's official resources
            </p>
            <h2>Plans (Ordered by priority)</h2>
            <ul>
                <li>General UI polish
                <ul>
                    <li>Mobile swipe gestures</li>
                </ul>
                </li>
                <li>People search</li>
                <li>Show current Canvas & EASEL grades on dashboard</li>
                <li>Show remaining DCB & caf swipes on dashboard</li>
                <li>Page to show hours of various buildings</li>
                <li>Classifieds on dashboard</li>
                <li>Option to use the real Pipeline search</li>
            </ul>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss">
    .dashboard {
        background-color: #fff;
        width: 100%;
        min-height: 100vh;
    }

    .dashboard-inner {
        padding: 30px 10% 0px;
    }

    .dashboard-title {
        margin: 0;
        padding: 0;
    }
</style>
