import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._


class MySimulation extends Simulation {

//        val httpConf = http
  //                .baseURL("http://99.12.89.13/")
  //                .acceptCharsetHeader("ISO-8859-1,utf-8;q=0.7,*;q=0.7")
  //                .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
  //                .acceptEncodingHeader("gzip, deflate")
  //                .acceptLanguageHeader("fr,fr-fr;q=0.8,en-us;q=0.5,en;q=0.3")
  //                .disableFollowRedirect
  //
  //        val headers_1 = Map(
  //                "Keep-Alive" -> "115")
  //
  //        val scn = scenario("Scenario name")
  //                .exec(
  //                        http("main page")
  //                                .get("/ActShipMobile/api/proxy/block/client/list?cityName=%E5%85%A8%E5%9B%BD")
  //                                .headers(headers_1)
  //                                .check(regex("新户体验尊享show").saveAs("test_save"))
  //                                .check(status.is(200)))
  //
  //  setUp(scn.inject(
  //  //atOnceUsers(200),//一次性有200个用户请求
  //  //rampUsers(500) over(1 seconds),//1秒内500个用户
  //  constantUsersPerSec(150) during(15 seconds)//15秒内，每秒100个
  //  ).protocols(httpConf))
  val httpConf = http
    .baseURL("http://220.181.112.244/")
    .acceptCharsetHeader("ISO-8859-1,utf-8;q=0.7,*;q=0.7")
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
    .acceptEncodingHeader("gzip, deflate")
    .acceptLanguageHeader("fr,fr-fr;q=0.8,en-us;q=0.5,en;q=0.3")
    .disableFollowRedirect

  val headers_1 = Map(
    "Keep-Alive" -> "115")

  val scn = scenario("visit baidu website")
    .exec(
      http("main page")
        .get("/home/")
        .headers(headers_1)
        .check(status.is(302)))

  setUp(scn.inject(
    atOnceUsers(10),//一次性有200个用户请求
  ).protocols(httpConf))
}
