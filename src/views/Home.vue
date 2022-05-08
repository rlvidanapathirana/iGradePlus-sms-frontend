<template>
  <div>
    <div class="container">
    <div class="content">
      <!-- start first content -->
      <div class="first-box">
        <div class="box one"><span>30</span>
          <p>The Number Of Users</p>
        </div>
        <div class="box tow"><span>07</span>
          <p>The Number Of Admins</p>
        </div>
      </div>
      <div class="secound-box">
        <div class="box three"><span>84</span>
          <p>The Number Of All Records </p>
        </div>
        <div class="box four"><span>38</span>
          <p>The Number Of Rewords</p>
        </div>
      </div>
      <!-- end first content -->
      </div>

      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
/* * {
  box-sizing: border-box;
  margin: 0;
} */
body {
  font-family: tahoma, arial;
}
/* .container {
  display: flex;
  height: 100vh;
} */
/* start dashboard */
.container .dashbord {
  /* width: 360px; */
  background-color: #333;
  color: #fff;
  padding: 20px;
}
.container .dashbord h3 {
  text-align: center;
  border-bottom: 1px solid #5f5e5e;
  padding: 20px 0;
  margin-top: -20px;
}
/* end dashboard */
.container .content {
  width: calc(100% - 50px);
  background-color: #eee;
  padding: 20px;
}
.container .content .box {
  border-left: 3px solid transparent;
}
.container .content .box span {
  font-weight: bold;
  font-size: 30px;
}
.container .content .box p {
  color: #978888;
  margin-top: 10px;
}
/* start first content */
.container .content .first-box {
  display: flex;
  justify-content: space-between;
}
.container .content .first-box .one {
  border-color: #e91e63;
}
.container .content .first-box .one span {
  color: #e91e63;
}
.container .content .first-box .tow {
  border-color: #009688;
}
.container .content .first-box .tow span {
  color: #009688;
}
.container .content .secound-box .three {
  border-color: #ff5722;
}
.container .content .secound-box .three span {
  color: #ff5722;
}
.container .content .secound-box .four {
  border-color: #2196f3;
}
.container .content .secound-box .four span {
  color: #2196f3;
}
.container .content .first-box .box {
  background-color: #fff;
  padding: 20px;
  width: calc((100% - 20px) / 2);
}
.container .content .secound-box {
  display: flex;
  justify-content: space-between;
}
.container .content .secound-box .box {
  background-color: #fff;
  padding: 20px;
  width: calc((100% - 20px) / 2);
  margin-top: 20px;
  margin-bottom: 20px;
}
/* end first content */

</style>
