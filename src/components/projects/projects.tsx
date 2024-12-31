import Experience from "../experience/experience";
import Toggle from "../toggle";

export default function Projects() {
  return (
    <div className="px-[25%] py-[50px]">
      <div className="flex justify-end">
        <Toggle />
      </div>
      <br />
      <div className="flex flex-col items-start space-y-4">
        <Experience 
          date={"January - April 2025"}
          company={"X (Twitter)"}
          position={"Software Engineer Intern"}
          description={"Joining Winter 2025 as a Software Engineer Intern on the Core Product Recommendations team. This team deals with the \"For you\" feed, the immersive video feed, and Search. It is one of the core drivers of usage on the platform and intersects between product engineering, distributed systems engineering, and recommendations/ML engineering."}
          points={["Incoming Winter 2025 Software Engineer Intern on the Core Product Recommendations team"]}
        />
        <Experience 
          date={"May - August 2024"} 
          company={"Databricks"} 
          position={"Software Engineer Intern"} 
          description={"At Databricks, I worked on the Databricks Default Storage Team. This team is responsible for the default storage layer for all Databricks workspaces (a SaaS product allowing for easy and a seamless sign-on experience for users). \
            The primary problem I worked on was that there are many different table formats (Delta, Iceberg, Parquet, etc.) and the team wanted to provide a unified experience for users to interact with these tables. \
            I worked on the \"Databricks Spark Connector\" - a library that allows internal and external Spark users (e.g. AWS EMR Spark) to interact with Databricks tables. \
            This not only involved creating a new library from scratch using JDBC and Spark's DataSource V2 API, but also involved working with the Spark compiler (Catalyst) to optimize the performance of the library. \
            For instance, when joining two large tables in Spark, the default behaviour is to read the two tables from the data source and then perform the join on the client side, far away from where the data resides. \
            However, with the Databricks Spark Connector, I was able to push down the join operation to the Databricks backend, which significantly reduced the amount of data that needed to be transferred over the network. Ultimately, this resulted in a more than 100x speedup for some queries (based on TCP-DS 10TB benchmark). \
            A number of other optimizations were made to the library, such as making use of multiple executors by dumping the table into an external S3 storage location then reading the underlying Parquet files in parallel with multiple executors.\
            I learned a lot about the internals of Spark, the Spark DataSource V2 API, and the Spark Catalyst optimizer. I also learned about the internals of Databricks, such as the Databricks File System (DBFS) and the Databricks Runtime. Super exciting stuff!"}
          points={["Part of Default Storage team developing custom Spark Data Source connector for Databricks", "Reduced round-trip Spark processing time by 100x on Databricks data source through query, aggregation, and relational operator pushdown", "Implemented custom bottom-up Logical Plan optimizer on top of existing Spark Catalyst Optimizer", "Increase data throughput by 2x leveraging multiple executors by partitioning data in external locations before sending back to Spark to process", "Benchmarked performance of custom Spark datasource on TPC-DS 10TB scale on 3X-Large EC2 cluster", "Technologies Used: Scala, Spark, Bazel, SQL, Databricks, JDBC, EC2"]}
        />
        <Experience 
          date={"September - December 2023"} 
          company={"Snowflake"} 
          position={"Software Engineer Intern"} 
          description={""}
        />
        <Experience 
          date={"January - April 2023"} 
          company={"Ford Motors"} 
          position={"Network Software Engineer Intern"} 
          description={""}
        />
        <Experience 
          date={"May - August 2022"} 
          company={"Uncaught Exception Inc"} 
          position={"Software Engineer Intern"} 
          description={""}
        />
      </div>
    </div>
  )
}