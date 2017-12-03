<template>
  <div>
    <demo-details
      :header="header"
      :introduction="introduction"
      :desc="desc"
      :gitLink="gitLink"
      :webLink="webLink"
    >

      <vue-recyclist class="list" :list="list" :tombstone="tombstone" :size="size" :loadmore="loadmore">
        <template slot="tombstone" slot-scope="props">
          <div class="item tombstone">
            <div class="avatar"></div>
            <div class="bubble">
              <p></p>
              <p></p>
              <p></p>
              <div class="meta">
                <time class="posted-date"></time>
              </div>
            </div>
          </div>
        </template>
        <template slot="item" slot-scope="props">
          <div :id="props.data.id" class="item" @click="itemClicked(props)">
            <div class="avatar" :style="{backgroundImage: 'url(' + (props.data.avatar || '') + ')'}"></div>
            <div class="bubble">
              <p>{{ props.data.msg }}</p>
              <div class="meta">
                <time class="posted-date">{{ props.data.time }}</time>
              </div>
            </div>
          </div>
        </template>
        <!--<div slot="spinner">Loading Data</div>-->
        <!--<div slot="nomore">No More Data</div>-->
      </vue-recyclist>
      <div ref="avatars" style="display:none">
        <img src="../../assets/recyclist/images/avatar0.jpg"/>
        <img src="../../assets/recyclist/images/avatar1.jpg"/>
        <img src="../../assets/recyclist/images/avatar2.jpg"/>
        <img src="../../assets/recyclist/images/avatar3.jpg"/>
      </div>

    </demo-details>
  </div>
</template>

<script>
  import Details from '../../components/Details.vue'
  import cPanel from '../../components/Content'
  import VueRecyclist from 'vue-recyclist'

  import Data from '../../assets/recyclist/data'
  import Stats from '../../assets/recyclist/stats.min'
  export default {
    components: {
      'demoDetails': Details,
      cPanel,
      VueRecyclist
    },
    data () {
      return {
        header: 'vue-recyclist',
        introduction: '这里是关于vue-recyclist插件的相关内容介绍',
        desc: '这里是关于vue-recyclist插件的相关内容说明',
        gitLink: 'https://github.com/xtongs/vue-recyclist',
        webLink: 'https://xtongs.github.io/vue-recyclist',

        page: 0,
        offset: 200,

        // data
        initTime: new Date().getTime(),
        id: 0,
        // list
        list: [],
        size: 20,
        tombstone: false
      }
    },
    methods: {
      getItem(id) {
        const avatar = Math.floor(Math.random() * Data.avatars)
        const msg = Data.messages[Math.floor(Math.random() * Data.messages.length)]
        return {
          id: 10000 + id,
          avatar: this.$refs.avatars.children[avatar].src,
          msg: msg,
          time: new Date(Math.floor(this.initTime + id * this.size * 1000 + Math.random() * this.size * 1000)).toString(),
        }
      },
      loadmore() {
        let items = []
        setTimeout(() => {
          for (let i = 0; i < this.size; i++) {
            items.push(this.getItem(this.id++))
          }
          this.list = this.list.concat(items)
        }, 200)
      },
      itemClicked(props) {
        console.log('Item:' + props.index, props.data)
      },
      addStatsPanel() {
        if (window.requestIdleCallback) {
          let self = this
          let stats = new Stats()
          let domPanel = new Stats.Panel('D', '#0ff', '#002')
          stats.addPanel(domPanel)
          stats.showPanel(3)
          document.body.appendChild(stats.dom)
          setTimeout(function timeoutFunc() {
            // Only update DOM node graph when we have time to spare to call
            // numDomNodes(), which is a fairly expensive function.
            requestIdleCallback(() => {
              domPanel.update(self.numDomNodes(document.body), 1500)
              setTimeout(timeoutFunc, 100)
            })
          }, 100)
        }
      },
      numDomNodes(node) {
        if (!node.children || node.children.length == 0) return 0
        let childrenCount = Array.from(node.children).map(this.numDomNodes)
        return node.children.length + childrenCount.reduce(function (p, c) {
            return p + c;
          }, 0)
      }
    },
    computed: {
    },
    created(){
//      this.addStatsPanel()
    },
    watch: {
      tombstone(val){
        localStorage['tombstone'] = +!val
        this.id = 0
        this.list = []
        this.loadmore()
      }
    },
  }
</script>

<style lang="less" rel="stylesheet/less">
  .list {
    width: 375px;
    max-width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0;
    border: 1px solid #ddd;
    list-style-type: none;
    text-align: center;
    background: #eee;
    .item {
      display: flex;
      padding: 10px 0;
      width: 100%;
      text-align: left;
      .avatar {
        border-radius: 50%;
        margin-left: 15px;
        margin-right: 6px;
        min-width: 48px;
        width: 48px;
        height: 48px;
        background-image: url('../../assets/recyclist/images/unknown.jpg');
        background-size: cover;
        outline: none;
      }
      p {
        margin: 0;
        word-wrap: break-word;
        font-size: 14px;
      }
      &.tombstone {
        p {
          width: 100%;
          height: 0.5em;
          background-color: #ccc;
          margin: 0.5em 0;
        }
      }
      .bubble {
        padding: 7px 10px;
        color: #333;
        background: #fff;
        box-shadow: 0 3px 2px rgba(0, 0, 0, 0.1);
        position: relative;
        max-width: 420px;
        min-width: 80px;
        margin: 0 20px 0 5px;
        &:before {
          content: '';
          border-style: solid;
          border-width: 0 10px 10px 0;
          border-color: transparent #fff transparent transparent;
          position: absolute;
          top: 0;
          left: -10px;
        }
      }
      .meta {
        font-size: 0.8rem;
        color: #999;
        margin-top: 3px;
      }
    }
  }
</style>
