<template>
  <main style="margin-top: 40px;">
    <div class="container items-list">
      <ItemsListItem v-for="(item, index) in items"
                     :key="item.index"
                     v-model="items[index]"
      />
    </div>
  </main>
</template>

<script>
  import ItemsListItem from './ItemsListItem';

  export default {
    name: 'ItemsList',
    components: {ItemsListItem},
    data() {
      return {
        items: [
          {
            title: 'Карточка 1',
            description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
            views: 12,
            id: 1
          },
          {
            title: 'Карточка 2',
            description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. ',
            views: 567,
            id: 2
          },
          {
            title: 'Карточка 3',
            description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. ',
            views: 234234,
            id: 3
          },
          {
            title: 'Карточка 3',
            description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. ',
            views: 234234,
            id: 4
          },
          {
            title: 'Карточка 3',
            description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. ',
            views: 234234,
            id: 5
          },
          {
            title: 'Карточка 3',
            description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. ',
            views: 234234,
            id: 6
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .items-list {
    display: grid;
    grid-gap: 20px;
    grid-template: auto / repeat(4, 1fr);
    grid-auto-flow: row;
  }
</style>