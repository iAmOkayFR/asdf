https://demo.goodlayers.com/kingster/homepage-2/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEnginr.UI;
using TMPro;


public class movement : MonoBehaviour
{
        public int speed = 5;
        public int coin = 0;
        public TMP_Text coinadd;

        //update is called once per frame
        void Update()
        {
                Debug.Log(Time.deltaTime);
            float moveY = Input.GetAxis('Vertical');
            float moveX = Input.GetAxis('horizontal');
            Vector3 movement = new Vector3(moveX, 0, moveY);
            transform.translate(moevment * speed * Time.deltaTime);
        }

        private void OncollisionEnter(Collision collision)
        {
            if(collision.gameObject.compareTag('coin')){\
            Destroy(collisiongameObject);
            coin++;
            ScoreIncrementation();
            }
        }

}
