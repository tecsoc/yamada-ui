import { Meta, StoryFn } from "@storybook/react"
import { Link, Heading, LinkBox, LinkOverlay, Text } from "@yamada-ui/react"

type Story = StoryFn<typeof LinkBox>

const meta: Meta<typeof LinkBox> = {
  title: "Components / Navigation / LinkBox",
  component: LinkBox,
}

export default meta

export const basic: Story = () => {
  return (
    <LinkBox
      as="article"
      maxW="sm"
      p="md"
      rounded="md"
      border="1px solid"
      borderColor="inherit"
      boxShadow="md"
    >
      <Text as="span">鳥山明</Text>

      <Heading size="md" my="sm">
        <LinkOverlay
          href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%83%9C%E3%83%BC%E3%83%AB"
          isExternal
        >
          ドラゴンボール
        </LinkOverlay>
      </Heading>

      <Text>
        『ドラゴンボール』（DRAGON
        BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。略称は『DB』。
      </Text>
    </LinkBox>
  )
}

export const withNestedLink: Story = () => {
  return (
    <LinkBox
      as="article"
      maxW="sm"
      p="md"
      rounded="md"
      border="1px solid"
      borderColor="inherit"
      boxShadow="md"
    >
      <Text as="span">鳥山明</Text>

      <Heading size="md" my="sm">
        <LinkOverlay
          href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%83%9C%E3%83%BC%E3%83%AB"
          isExternal
        >
          ドラゴンボール
        </LinkOverlay>
      </Heading>

      <Text mb="sm">
        『ドラゴンボール』（DRAGON
        BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。略称は『DB』。
      </Text>

      <Link
        href="https://dragon-ball-official.com/"
        isExternal
        fontWeight="bold"
      >
        オフィシャルサイト
      </Link>
    </LinkBox>
  )
}
