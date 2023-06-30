import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { RewardContext, startStream } from "src/app/providers/RewardProvider";
import { calculateFlowRate } from "src/utils";

export function ActionSidebar() {
  const { state } = useContext(RewardContext)!;

  const [flowRate, setFlowRate] = useState<string>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return Object.keys(state).filter((key) => state[key].value).length > 0 ? (
    <Flex w="20%" direction={"column"} h="100%" justify={"space-between"} p={4}>
      <Input isDisabled={isLoading} placeholder="Enter amount of fDAIx / month" onChange={(e) => {
        if (e.target.value)
        setFlowRate(calculateFlowRate(e.target.value))
      }}/>
      <Button isLoading={isLoading} bg="brand.400" color="white" onClick={async () => {
        if (!flowRate) return

        setIsLoading(true)
        await startStream(flowRate, Object.keys(state).filter(key => state[key].value).map(id => state[id].post.profile.ownedBy as `0x${string}`))
        setIsLoading(false)
      }}>
        Stream rewards
      </Button>
    </Flex>
  ) : (
    <Flex w='20%'/>
  );
}
