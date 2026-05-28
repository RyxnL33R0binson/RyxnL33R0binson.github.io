"use client";

import { Boxes, type BoxesProps } from "@/components/ui/boxes";
import { useCanRunHeavyAnimations } from "@/hooks/useCanRunHeavyAnimations";

export default function AdaptiveBoxes(props: BoxesProps) {
  const canRunHeavyAnimations = useCanRunHeavyAnimations();

  if (!canRunHeavyAnimations) {
    return null;
  }

  return <Boxes {...props} />;
}
