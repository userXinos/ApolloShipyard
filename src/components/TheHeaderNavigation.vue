<template>
  <div class="container">
    <nav class="nav">
      <ul
        v-click-outside="hideAll"
        class="list"
      >
        <li
          v-for="(heading, key) of nav"
          :key="key"
          @click="swith(heading)"
        >
          <div>
            <h2
              class="name"
              :style="{color:(heading.isShow) ? '#5fdba7' : ''}"
            >
              {{ $t(heading.text.locKey) }}
            </h2>
            <ul
              v-if="heading.isShow"
              class="sublist"
            >
              <li
                v-for="(child, key1) of heading.childrens"
                :key="key1"
              >
                <template v-if="child.link.router">
                  <router-link :to="child.link.router">
                    <h2 class="name">
                      {{ $t(child.text.locKey) }}
                      {{ child.text.after }}
                    </h2>
                  </router-link>
                </template>
                <template v-else>
                  <a
                    :href="child.link"
                    target="_blank"
                  >
                    <h2 class="name">
                      {{ $t(child.text.locKey) }}
                      {{ child.text.after }}
                    </h2>
                  </a>
                </template>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
// import {pages} from '../js/pages';

// pages.forEach((e) => e.isShow = false); // модифицировать пути

export default {
    name: 'Nav',
    data() {
        return {
            // nav: pages,
        };
    },
    methods: {
        hideAll() {
            // this.nav.forEach((e) => e.isShow = false);
        },
        swith(obj) {
            const result = !obj.isShow;
            this.hideAll();
            obj.isShow = result;
        },
    },
};
</script>

<style scoped>
.nav {
  --header-height: 80px;
  --bnt-color: #101415;
  --btn-hover-color: #242e2f;

  position: absolute;
  left: 10px;
  height: var(--header-height);
}
.nav ul, .nav ul li {
  list-style-type: none;
  cursor: pointer;
}
.list > li {
  display: inline-block;
  margin: 0 10px;
}
.nav a {
  display: block;
  transition: .5s linear;
  text-decoration: none;
}
.name {
  color: white;
  padding-top: 25%;
}
.sublist {
  position: absolute;
  top: var(--header-height);
  min-width: 250px;
  transition: 0.5s ease-in-out;
  font-size: 10px;
}
.sublist .name {
  padding: 5% 0;
}
.nav .sublist li {
  background-color: var(--bnt-color);
}
.nav >>> .sublist li:hover {
  background-color: var(--btn-hover-color);
}

@media screen and (max-width: 960px) {
  .nav{
    position: revert;
    padding-top: var(--header-height);
    width: 100%;
    display: inline-block;
  }
  .nav .list .name {
    padding: 15px 0 15px 6%;
  }
  .list li {
    display: block;
    margin: 0;
  }
  .list li div .name {
    text-align: left;
  }
  .sublist {
    position: inherit;
    padding-top: 5%;
  }
  .name {
    padding-top: 0
  }
  .sublist .name {
    padding: 0;
  }
}
</style>
