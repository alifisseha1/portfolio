import {
  ChangeCircleOutlined,
  CheckCircleOutline,
  HeadsetMicOutlined,
} from "@mui/icons-material";
import op from "./ourpolicy.module.css";

function OurPolicy() {
  return (
    <div className={op.container}>
      <div className={op.text}>
        <ChangeCircleOutlined />
        <p>Easy Exhange Policy</p>
        <p className={op.textP}>We offer hassle free exhange policy</p>
      </div>
      <div className={op.text}>
        <CheckCircleOutline />
        <p>7 Days Return Policy</p>
        <p className={op.textP}>We provide 7 days free return policy</p>
      </div>
      <div className={op.text}>
        <HeadsetMicOutlined />
        <p>Best Customer support</p>
        <p className={op.textP}>we provide 24/7 customer support</p>
      </div>
    </div>
  );
}

export default OurPolicy;
