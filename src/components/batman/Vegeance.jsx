import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import style from './vegeance.module.css'
import { motion } from 'framer-motion'

function Vegeance() {
  const BatCounter = useSelector((state) => state.counter.BatCounter);
  const [isSignal, setIsSignal] = useState(false);
  var today = new Date();
  var Time = today.getHours();

  return (
    <>
      {BatCounter === Time || BatCounter === (Time - 12) ? <div className={style.Infromation}>
        <img className={style.Batman} src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902827f1-23ee-484f-b383-5ba4988de668/dfac0cb-14ed0346-7fa8-46c8-96d2-5a7e36bb3b21.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkwMjgyN2YxLTIzZWUtNDg0Zi1iMzgzLTViYTQ5ODhkZTY2OFwvZGZhYzBjYi0xNGVkMDM0Ni03ZmE4LTQ2YzgtOTZkMi01YTdlMzZiYjNiMjEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.a22UOcdpyOQlrBwbO47uTy6j8iATssGMgNBRKYVCXn4' alt='Batman' />
        <div className={style.BatSignContainer}>
          <img className={style.BatSign} src="https://custom-doodle.com/wp-content/uploads/doodle/batman-flying-logo/batman-flying-logo-doodle.gif" alt="bat" />
          <div className={style.MessageContainer}>
            <span className={style.InfromationalTxt}>speaking faxxxx Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quo inventore! dflask, eveniet.<span onClick={() => setIsSignal(true)} className={style.FindIt}>IN SHADOWS</span> veritatis, adipisci iusto deleniti alias id  accusamus? Nesciunt ipsa veritatis error, inventore illum soluta quidem explicabo! Corrupti.</span>
            <div className={style.SunHolder}>
              <img className={style.MessageEndingImage} src="https://onlinepngtools.com/images/examples-onlinepngtools/sunset.gif" alt="butterflies" />
            </div>
            {isSignal ?
              <div className={style.SignContainer}>
                <motion.svg className={style.Signature} width="735" height="416" viewBox="0 0 735 416" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 5 }} d="M43 155C41.2683 157.251 44.6386 166.469 44.7778 167C49.3285 184.384 54.3924 201.631 59 219C70.1458 261.015 77.3391 303.153 80.1111 346.556C80.7635 356.771 81 366.99 81 377.222C81 378.684 81.3149 381.388 80.7778 383C79.8346 385.83 78.0655 368.54 78 368" stroke="white" stroke-width="3" stroke-linecap="round" />
                  <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 5 }} d="M1.99999 221C1.99999 200.062 1.7563 176.185 11.9444 157.167C22.5886 137.298 48.7291 126.56 70.5555 130.444C78.6562 131.886 84.5984 138.702 88.9444 145.167C100.823 162.835 104.437 184.753 103.333 205.722C102.512 221.337 97.8083 235.95 87.7778 248.056C87.0803 248.897 85.0078 251.183 85.2222 250.111C85.8148 247.148 93.2157 245.025 94.5 244.667C111.335 239.971 133.055 239.21 149.444 246.111C164.569 252.479 171.262 263.37 173.333 279.222C176.164 300.886 174.986 322.487 167.611 343.167C159.382 366.242 144.878 394.5 123.278 408C110.109 416.23 88.4483 414.158 74.2222 410C69.4905 408.617 69.3779 406.576 74.4444 404.111C98.3947 392.46 125.759 386.151 151 378" stroke="white" stroke-width="3" stroke-linecap="round" />
                  <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 5 }} d="M221 280C217.869 300.107 216.585 320.583 212.056 340.444C211.304 343.74 210.738 349.776 209 352.889C208.279 354.18 207.621 350.228 207.333 348.778C206.555 344.856 203.676 327.18 203.333 325.111C197.704 291.096 190.155 257.104 185.611 222.944C182.716 201.18 178.864 178.998 177.222 157.111C177.02 154.409 176.854 151.549 177.056 148.833C177.181 147.142 177.154 147.13 178.944 148.889C183.758 153.618 188.561 160.033 192.222 165.278C214.135 196.67 232.235 233.951 239.778 271.778C242.785 286.857 244.319 302.581 245.889 317.889C246.289 321.793 245.819 318.318 245.778 318.111C244.258 310.41 240.737 303.299 238 296" stroke="black" stroke-width="3" stroke-linecap="round" />
                  <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 5 }} d="M214 278C226.854 278 243.234 281.229 255 276" stroke="black" stroke-width="3" stroke-linecap="round" />
                  <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 5 }} d="M232 162C233.036 158.891 235.247 158.017 238.278 156.333C254.146 147.518 270.946 140.222 287.222 132.222C319.51 116.354 353.141 100.91 383.556 81.5556C388.695 78.2852 382.05 79.7565 379.444 79.7778C370.153 79.8536 370.254 79.8139 360.444 79.3333C355.412 79.0868 349.561 76.2593 345.333 79C337.853 83.8495 351.392 120.736 351.5 121.111C361.958 157.415 376.096 192.07 389.444 227.333C400.705 257.082 409.335 287.699 419.778 317.722C421.374 322.31 423.011 326.897 425 331.333C425.916 333.376 427.839 335.885 428 338.222C428.294 342.485 423.883 336.332 423.5 335.778C418.702 328.828 417.932 319.051 416 311" stroke="white" stroke-width="3" stroke-linecap="round" />
                  <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 5 }} d="M419 207C423.539 210.491 424.304 214.778 424.778 220.333C425.661 230.677 427.43 240.552 429.944 250.611C431.543 257.007 430 237.426 430 230.833C430 220.677 430.762 210.829 428 201C426.645 196.179 424.259 191.052 424 186C424 185.995 423.708 183.548 424.389 184.278C430.801 191.148 434.456 204.787 437.722 213C446.165 234.232 453.217 255.55 458.833 277.667C459.97 282.142 460.958 286.791 461 278.333C461.173 243.52 461 208.702 461 173.889C461 170.124 459.863 164.157 461.5 160.556C463.703 155.708 475.177 172.536 475.333 172.778C491.043 197.042 500.997 225.892 510.222 253.111C518.749 278.267 523.344 304.066 528.389 330.056C529.148 333.968 533.967 345.711 532.444 350.278C532.038 351.498 532.008 347.731 532 346.444C531.945 337.964 532 329.481 532 321" stroke="white" stroke-width="3" stroke-linecap="round" />
                  <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 5 }} d="M542 262C542 209.251 521.989 161.664 507.889 111.556C499.152 80.5063 491.226 48.2749 489.389 15.9444C489.38 15.7913 488.218 2.9707 490 1.66665C490.52 1.28626 491.319 1.88981 491.833 2.27776C496.302 5.64869 503.407 14.4895 505.778 17.3889C546.109 66.7032 579.843 122.085 612.444 176.667C632.238 209.806 651.37 244.534 662.778 281.611C665.241 289.616 665.29 291.197 666.778 298.222C667.07 299.603 667.506 303.375 666.444 302.444C660.329 297.083 655.648 288.571 651.278 282C644.591 271.945 637.733 262.017 631 252" stroke="black" stroke-width="3" stroke-linecap="round" />
                  <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 5 }} d="M519 159C522.512 155.406 521.433 156.027 527.556 153.222C539.525 147.739 552.09 143.416 564.278 138.444C572.801 134.967 581.112 131.37 590 129" stroke="black" stroke-width="3" stroke-linecap="round" />
                  <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 5 }} d="M676 174C678.865 211.101 682 248.661 682 285.889C682 288.634 681.772 280.403 681.556 277.667C679.701 254.247 675.976 231.027 672 207.889C665.497 170.05 658.909 131.987 651.111 94.3889C649.98 88.9377 648.468 83.5169 648.056 77.9444C647.915 76.0474 647.901 76.5334 649.444 79.0556C653.795 86.1671 657.965 93.3874 662.222 100.556C682.948 135.456 703.71 170.309 723.444 205.778C725.909 210.207 728.342 215.409 731.5 219.444C732.239 220.389 732.035 217.088 732.056 215.889C732.259 204.168 732.277 205.343 732.5 191C732.805 171.372 733 151.742 733 132.111C733 117.367 733.631 102.211 731.556 87.5556C730.68 81.3704 728 75.2888 728 69" stroke="white" stroke-width="3" stroke-linecap="round" />
                </motion.svg>
              </div>
              : ""}
          </div>
          {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJjlzfXTjY9Hgt3SWDsf8RFQaygbw6fMuVwA&usqp=CAU" alt="BatLogo" /> */}
          {/* <img  src="https://media0.giphy.com/media/Sr2qxJKvGq6PqUNgrm/giphy.gif?cid=6c09b952kkfqka0tj9mtizp6utfn77xippjdboznqrw7tz33&rid=giphy.gif" alt="bat" /> */}
        </div>
      </div> : ''}
    </>
  )
}

export default Vegeance