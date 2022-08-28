from elasticsearch import Elasticsearch
from elasticsearch import helpers
import time 

index_name = "demo"

# Update cloud ID, username, password
cloud_id = "uihealth-i-o-optimized-deployment:Y2VudHJhbHVzLmF6dXJlLmVsYXN0aWMtY2xvdWQuY29tOjkyNDMkMGI3NjI1YTZkMGZiNDQ1ZDhjODc1Y2E5NDkxNzkzZWMkNTE0NjljOWFlZDRkNDc5MmFlYzdkMGJiZTk0YjlmMjU="
uname = "bhavya"
pwd = "sprintern21"

def gendata(idx_tup):

    for i,(abstract,body) in enumerate(idx_tup):
        yield {
            "_index": index_name,
            "_id": i,
            "_source": {"abstract": abstract,"body":body},
        }

def main():
   

    es = Elasticsearch(
    cloud_id=cloud_id, http_auth=(uname,pwd))
    
    body = ['Document about Sports','Document about Health','Another document about health']
    abstract = ["Abstract of document 1","Abstract of document 2","Abstract of document 3"]
    
    es.indices.delete(index=index_name, ignore=[400, 404]) #deleting existing index

    es.indices.create(
    index=index_name,

    body={
    "mappings": {
    "properties": {  
    "body": {"type": "text","analyzer": "english","fielddata":True},
    "abstract": {"type": "text","analyzer": "english","fielddata":True}
                }
            }
        }
    ) # creating the index
    
    helpers.bulk(es, gendata((zip(abstract,body)))) #indexing all files

    time.sleep(3) # Sleeping only to wait until indexing is complete

    query = {'query': 
        {
        "match": 
            {"body":"health"}
        }
    }
    
    res = es.search(index='demo',body=query)#Searching
    for idx,hit in enumerate(res['hits']['hits']):
        print('Doc {}:'.format(idx+1), hit)



if __name__ == '__main__':
    main()