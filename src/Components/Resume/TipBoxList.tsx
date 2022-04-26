import React from 'react';
import TipBox from './ResumeForms/TipBox';
import { TipBoxModel } from './TipBoxModel';

interface Props {
    TipBoxes: TipBoxModel[];
    index: number;
}

const TipBoxList: React.FC<Props> = ({TipBoxes}) => {
  return (
    <>
        {TipBoxes.map((tipbox, index) =>
        <TipBox id={tipbox.id} mt={tipbox.mt} content={tipbox.content} key={tipbox.id} index={index} />
        )}
    </>
  )
}

export default TipBoxList